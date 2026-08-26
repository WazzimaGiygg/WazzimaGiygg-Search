// languages/search-index.js
// ============================================
// SEARCH LANGUAGE MANAGER
// ============================================

// Estende o LanguageManager existente para incluir as traduções do Search
(function() {
    'use strict';
    
    // Se o LanguageManager já existe, adiciona as traduções de busca
    if (typeof LanguageManager !== 'undefined') {
        console.log('🌍 LanguageManager encontrado, integrando Search translations...');
        
        // Função para adicionar traduções de busca
        LanguageManager.addSearchTranslations = function(lang, translations) {
            // Mescla com as traduções existentes
            if (!this.searchTranslations) {
                this.searchTranslations = {};
            }
            this.searchTranslations[lang] = translations;
            console.log(`✅ Search translations para "${lang}" adicionadas`);
        };
        
        // Sobrescreve o translate para incluir as traduções de busca
        const originalTranslate = LanguageManager.translate;
        LanguageManager.translate = function(key, params = {}) {
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
        
        console.log('✅ Search Language Manager integrado com sucesso!');
    } else {
        console.warn('⚠️ LanguageManager não encontrado. Criando versão simplificada para Search.');
        
        // Versão simplificada do LanguageManager para Search
        window.LanguageManager = {
            currentLang: 'pt',
            translations: {},
            searchTranslations: {},
            
            registerLanguage: function(lang, translations) {
                this.translations[lang] = translations;
                console.log(`✅ Idioma "${lang}" registrado (Search)`);
            },
            
            addSearchTranslations: function(lang, translations) {
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
                this.applyTranslations();
                
                // Dispara evento
                document.dispatchEvent(new CustomEvent('languageChanged', { 
                    detail: { language: lang } 
                }));
            },
            
            applyTranslations: function() {
                // Aplica traduções aos elementos com data-i18n
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
            }
        };
    }
})();

// ============================================
// INICIALIZAÇÃO DO SEARCH LANGUAGE MANAGER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se já existe LanguageManager
    if (typeof LanguageManager !== 'undefined') {
        // Inicializa
        const savedLang = localStorage.getItem('wzzm_language') || 'pt';
        LanguageManager.currentLang = savedLang;
        LanguageManager.applyTranslations();
        console.log(`🌍 Search: Idioma atual: "${savedLang}"`);
    }
});

console.log('📚 Search Language Manager carregado');
