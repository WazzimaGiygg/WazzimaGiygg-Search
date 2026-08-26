// languages/search-index.js
// ============================================
// SEARCH LANGUAGE MANAGER - INTEGRAÇÃO COM O SISTEMA EXISTENTE
// ============================================

(function() {
    'use strict';
    
    // ============================================
    // FUNÇÃO PARA REGISTRAR TRADUÇÕES DE BUSCA
    // ============================================
    function registerSearchTranslations(lang, translations) {
        // Tenta usar o LanguageManager global
        if (typeof window.LanguageManager !== 'undefined') {
            if (!window.LanguageManager.searchTranslations) {
                window.LanguageManager.searchTranslations = {};
            }
            window.LanguageManager.searchTranslations[lang] = translations;
            console.log(`✅ Search translations para "${lang}" registradas no LanguageManager`);
        } else {
            // Armazena temporariamente
            if (!window._pendingSearchTranslations) {
                window._pendingSearchTranslations = {};
            }
            window._pendingSearchTranslations[lang] = translations;
            console.log(`⏳ Search translations para "${lang}" armazenadas (aguardando LanguageManager)`);
        }
    }
    
    // ============================================
    // FUNÇÃO PARA APLICAR TRADUÇÕES DE BUSCA
    // ============================================
    function applySearchTranslations() {
        const lm = window.LanguageManager;
        if (!lm) {
            console.warn('⚠️ LanguageManager não disponível para aplicar traduções');
            return;
        }
        
        const currentLang = lm.currentLang || 'pt';
        const translations = lm.searchTranslations?.[currentLang] || {};
        
        console.log(`🌍 Aplicando traduções de busca para: "${currentLang}"`);
        
        // Aplica traduções a elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            let translation = translations[key];
            
            // Se não encontrou na busca, tenta nas traduções principais
            if (!translation) {
                translation = lm.translations?.[currentLang]?.[key] || key;
            }
            
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
            const placeholder = translations['placeholder_busca'] || 'Pesquise produtos, serviços, páginas...';
            searchInput.placeholder = placeholder;
        }
        
        // Atualiza título
        const title = document.querySelector('title');
        if (title) {
            const titleText = translations['search_titulo'] || 'WazzimaGiygg Search';
            title.textContent = titleText;
        }
        
        console.log(`✅ Traduções de busca aplicadas para "${currentLang}"`);
    }
    
    // ============================================
    // EXPORTA FUNÇÕES GLOBALMENTE
    // ============================================
    window.registerSearchTranslations = registerSearchTranslations;
    window.applySearchTranslations = applySearchTranslations;
    
    // ============================================
    // EXTENDE O LANGUAGE MANAGER EXISTENTE
    // ============================================
    if (typeof window.LanguageManager !== 'undefined') {
        const lm = window.LanguageManager;
        
        // Adiciona suporte para searchTranslations
        if (!lm.searchTranslations) {
            lm.searchTranslations = {};
        }
        
        // Guarda o translate original
        const originalTranslate = lm.translate;
        
        // Estende o translate para incluir searchTranslations
        lm.translate = function(key, params = {}) {
            // Tenta nas traduções de busca primeiro
            const searchTrans = this.searchTranslations?.[this.currentLang] || {};
            let text = searchTrans[key] || null;
            
            // Se não encontrou, usa o original
            if (text === null) {
                text = originalTranslate.call(this, key, {});
            }
            
            // Substitui parâmetros
            if (text && params) {
                Object.keys(params).forEach(param => {
                    text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
                });
            }
            
            return text || key;
        };
        
        // Adiciona método para aplicar traduções de busca
        lm.applySearchTranslations = applySearchTranslations;
        
        // Processa traduções pendentes
        if (window._pendingSearchTranslations) {
            Object.entries(window._pendingSearchTranslations).forEach(([lang, translations]) => {
                lm.searchTranslations[lang] = translations;
                console.log(`✅ Search translations pendentes para "${lang}" aplicadas`);
            });
            delete window._pendingSearchTranslations;
        }
        
        console.log('✅ Search Language Manager integrado com sucesso!');
        
    } else {
        console.warn('⚠️ LanguageManager não encontrado. Criando versão simplificada.');
        
        // ============================================
        // VERSÃO SIMPLIFICADA DO LANGUAGE MANAGER
        // ============================================
        const SimpleLanguageManager = {
            currentLang: 'pt',
            translations: {},
            searchTranslations: {},
            
            registerLanguage: function(lang, translations) {
                this.translations[lang] = translations;
                console.log(`✅ Idioma "${lang}" registrado`);
            },
            
            translate: function(key, params = {}) {
                // Tenta nas traduções de busca
                const searchTrans = this.searchTranslations?.[this.currentLang] || {};
                let text = searchTrans[key] || null;
                
                // Tenta nas traduções principais
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
            },
            
            init: function(defaultLang = 'pt') {
                const savedLang = localStorage.getItem('wzzm_language') || defaultLang;
                this.currentLang = savedLang;
                console.log(`🌍 Search Language Manager inicializado com idioma: "${savedLang}"`);
                return savedLang;
            },
            
            changeLanguage: function(lang) {
                if (!this.searchTranslations?.[lang] && !this.translations?.[lang]) {
                    console.warn(`⚠️ Idioma "${lang}" não tem traduções carregadas`);
                }
                this.currentLang = lang;
                localStorage.setItem('wzzm_language', lang);
                console.log(`🌍 Idioma alterado para: "${lang}"`);
                
                if (typeof this.applySearchTranslations === 'function') {
                    this.applySearchTranslations();
                }
                
                document.dispatchEvent(new CustomEvent('languageChanged', { 
                    detail: { language: lang } 
                }));
            },
            
            applySearchTranslations: applySearchTranslations
        };
        
        window.LanguageManager = SimpleLanguageManager;
        
        // Processa traduções pendentes
        if (window._pendingSearchTranslations) {
            Object.entries(window._pendingSearchTranslations).forEach(([lang, translations]) => {
                SimpleLanguageManager.searchTranslations[lang] = translations;
                console.log(`✅ Search translations pendentes para "${lang}" aplicadas`);
            });
            delete window._pendingSearchTranslations;
        }
        
        console.log('📚 Search Language Manager (fallback) criado');
    }
    
    // ============================================
    // INICIALIZAÇÃO AUTOMÁTICA
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        const lm = window.LanguageManager;
        if (lm) {
            // Inicializa com o idioma salvo
            const savedLang = localStorage.getItem('wzzm_language') || 'pt';
            if (!lm.currentLang) {
                lm.currentLang = savedLang;
            }
            
            // Aplica traduções
            setTimeout(function() {
                if (typeof lm.applySearchTranslations === 'function') {
                    lm.applySearchTranslations();
                } else if (typeof applySearchTranslations === 'function') {
                    applySearchTranslations();
                }
                console.log(`🌍 Search: Idioma atual: "${lm.currentLang}"`);
            }, 100);
        }
    });
    
    console.log('📚 Search Language Manager carregado');
})();
