// languages/search-index.js
// ============================================
// SEARCH LANGUAGE MANAGER - INTEGRAÇÃO COM O SISTEMA EXISTENTE
// ============================================

(function() {
    'use strict';
    
    // Verifica se o LanguageManager já existe (do jornal)
    if (typeof LanguageManager !== 'undefined') {
        console.log('🌍 LanguageManager encontrado, integrando Search translations...');
        
        // Guarda referência ao LanguageManager original
        const OriginalLanguageManager = LanguageManager;
        
        // Adiciona suporte para traduções de busca
        if (!OriginalLanguageManager.searchTranslations) {
            OriginalLanguageManager.searchTranslations = {};
        }
        
        // Função para registrar traduções de busca
        OriginalLanguageManager.registerSearchTranslations = function(lang, translations) {
            if (!this.searchTranslations) {
                this.searchTranslations = {};
            }
            this.searchTranslations[lang] = translations;
            console.log(`✅ Search translations para "${lang}" registradas`);
        };
        
        // Estende a função translate para incluir searchTranslations
        const originalTranslate = OriginalLanguageManager.translate;
        OriginalLanguageManager.translate = function(key, params = {}) {
            // Primeiro tenta nas traduções de busca
            const searchTrans = this.searchTranslations?.[this.currentLang] || {};
            let text = searchTrans[key] || null;
            
            // Se não encontrou, tenta nas traduções principais
            if (text === null) {
                text = this.translations?.[this.currentLang]?.[key] || key;
            }
            
            // Substitui parâmetros
            if (text && params) {
                Object.keys(params).forEach(param => {
                    text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
                });
            }
            
            return text || key;
        };
        
        // Adiciona função para aplicar traduções de busca
        OriginalLanguageManager.applySearchTranslations = function() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const translation = this.translate(key);
                if (translation && translation !== key) {
                    if (el.tagName === 'INPUT' && el.getAttribute('data-i18n-attr') === 'placeholder') {
                        el.placeholder = translation;
                    } else if (el.tagName === 'TEXTAREA' && el.getAttribute('data-i18n-attr') === 'placeholder') {
                        el.placeholder = translation;
                    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        // Não altera valor de inputs
                    } else {
                        el.textContent = translation;
                    }
                }
            });
            
            // Placeholder específico do search
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                searchInput.placeholder = this.translate('placeholder_busca');
            }
        };
        
        console.log('✅ Search Language Manager integrado com sucesso!');
        
    } else {
        console.warn('⚠️ LanguageManager não encontrado. Criando versão simplificada para Search.');
        
        // Versão simplificada apenas para fallback
        window.LanguageManager = {
            currentLang: 'pt',
            translations: {},
            searchTranslations: {},
            
            registerLanguage: function(lang, translations) {
                this.translations[lang] = translations;
                console.log(`✅ Idioma "${lang}" registrado (Search)`);
            },
            
            registerSearchTranslations: function(lang, translations) {
                this.searchTranslations[lang] = translations;
                console.log(`✅ Search translations para "${lang}" adicionadas`);
            },
            
            translate: function(key, params = {}) {
                const searchTrans = this.searchTranslations?.[this.currentLang] || {};
                let text = searchTrans[key] || null;
                
                if (text === null) {
                    text = this.translations?.[this.currentLang]?.[key] || key;
                }
                
                if (text && params) {
                    Object.keys(params).forEach(param => {
                        text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
                    });
                }
                
                return text || key;
            },
            
            init: function(defaultLang = 'pt') {
                this.currentLang = defaultLang;
                console.log(`🌍 Search Language Manager inicializado com idioma: "${defaultLang}"`);
                return defaultLang;
            },
            
            changeLanguage: function(lang) {
                this.currentLang = lang;
                console.log(`🌍 Search Language Manager mudou para: "${lang}"`);
                if (typeof this.applySearchTranslations === 'function') {
                    this.applySearchTranslations();
                }
                
                document.dispatchEvent(new CustomEvent('languageChanged', { 
                    detail: { language: lang } 
                }));
            },
            
            applySearchTranslations: function() {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    const translation = this.translate(key);
                    if (translation && translation !== key) {
                        if (el.tagName === 'INPUT' && el.getAttribute('data-i18n-attr') === 'placeholder') {
                            el.placeholder = translation;
                        } else if (el.tagName === 'TEXTAREA' && el.getAttribute('data-i18n-attr') === 'placeholder') {
                            el.placeholder = translation;
                        } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                            // Não altera valor de inputs
                        } else {
                            el.textContent = translation;
                        }
                    }
                });
                
                const searchInput = document.getElementById('search-input');
                if (searchInput) {
                    searchInput.placeholder = this.translate('placeholder_busca');
                }
            }
        };
        
        console.log('📚 Search Language Manager (fallback) carregado');
    }
    
    // ============================================
    // INICIALIZAÇÃO
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof LanguageManager !== 'undefined') {
            const savedLang = localStorage.getItem('wzzm_language') || 'pt';
            LanguageManager.currentLang = savedLang;
            
            // Aplica traduções de busca
            if (typeof LanguageManager.applySearchTranslations === 'function') {
                LanguageManager.applySearchTranslations();
            } else if (typeof applySearchTranslations === 'function') {
                applySearchTranslations();
            }
            
            console.log(`🌍 Search: Idioma atual: "${savedLang}"`);
        }
    });
    
    console.log('📚 Search Language Manager carregado');
})();
