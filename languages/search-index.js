// languages/search-index.js
// ============================================
// SEARCH LANGUAGE MANAGER - VERSÃO QUE NÃO QUEBRA A BUSCA
// ============================================

(function() {
    'use strict';
    
    console.log('📚 Inicializando Search Language Manager...');
    
    // ============================================
    // ARMAZENAMENTO DE TRADUÇÕES (SEGURANÇA)
    // ============================================
    if (!window._searchTranslations) {
        window._searchTranslations = {};
    }
    
    // ============================================
    // FUNÇÃO PARA REGISTRAR TRADUÇÕES
    // ============================================
    window.registerSearchTranslations = function(lang, translations) {
        window._searchTranslations[lang] = translations;
        console.log(`✅ Search translations para "${lang}" registradas (${Object.keys(translations).length} chaves)`);
        
        // Se o LanguageManager já existe, registra nele também
        if (typeof LanguageManager !== 'undefined' && LanguageManager.searchTranslations) {
            LanguageManager.searchTranslations[lang] = translations;
        }
    };
    
    // ============================================
    // FUNÇÃO PARA TRADUZIR (NÃO INTERFERE NO RESTO)
    // ============================================
    window.getSearchTranslation = function(key, params = {}) {
        const lang = localStorage.getItem('wzzm_language') || 'pt';
        const translations = window._searchTranslations[lang] || {};
        let text = translations[key] || key;
        
        if (params) {
            Object.keys(params).forEach(param => {
                text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
            });
        }
        
        return text;
    };
    
    // ============================================
    // FUNÇÃO PARA APLICAR TRADUÇÕES (NÃO QUEBRA A BUSCA)
    // ============================================
    window.applySearchTranslations = function() {
        try {
            console.log('🌍 Aplicando traduções de busca...');
            
            const lang = localStorage.getItem('wzzm_language') || 'pt';
            const translations = window._searchTranslations[lang] || {};
            
            if (Object.keys(translations).length === 0) {
                console.warn(`⚠️ Nenhuma tradução encontrada para "${lang}"`);
                return;
            }
            
            // Apenas traduz elementos com data-i18n-search
            document.querySelectorAll('[data-i18n-search]').forEach(el => {
                const key = el.getAttribute('data-i18n-search');
                const text = translations[key];
                if (text && text !== key) {
                    if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                        el.placeholder = text;
                    } else if (el.tagName === 'TEXTAREA' && el.hasAttribute('placeholder')) {
                        el.placeholder = text;
                    } else if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                        el.textContent = text;
                    }
                }
            });
            
            // Placeholder específico do search
            const searchInput = document.getElementById('search-input');
            if (searchInput && translations['placeholder_busca']) {
                searchInput.placeholder = translations['placeholder_busca'];
            }
            
            // Título
            const title = document.querySelector('title');
            if (title && translations['search_titulo']) {
                title.textContent = translations['search_titulo'];
            }
            
            // Status do maze
            const mazeStatus = document.getElementById('mazeStatus');
            if (mazeStatus && translations['maze_status']) {
                mazeStatus.textContent = translations['maze_status'];
            }
            
            console.log(`✅ Traduções aplicadas para "${lang}"`);
        } catch (error) {
            console.warn('⚠️ Erro ao aplicar traduções:', error);
        }
    };
    
    // ============================================
    // NÃO CRIAR UM NOVO LanguageManager - USAR O EXISTENTE
    // ============================================
    // Se não existir LanguageManager, cria um mínimo
    // mas NÃO SOBRESCREVE funções do search.js
    
    if (typeof LanguageManager === 'undefined') {
        console.log('ℹ️ LanguageManager não encontrado. Criando versão mínima (não interfere na busca)');
        
        // Versão mínima que não interfere em nada
        window.LanguageManager = {
            currentLang: localStorage.getItem('wzzm_language') || 'pt',
            translations: {},
            searchTranslations: window._searchTranslations,
            
            translate: function(key, params = {}) {
                const trans = this.searchTranslations?.[this.currentLang] || {};
                let text = trans[key] || key;
                if (params) {
                    Object.keys(params).forEach(p => {
                        text = text.replace(new RegExp(`{${p}}`, 'g'), params[p]);
                    });
                }
                return text;
            },
            
            changeLanguage: function(lang) {
                this.currentLang = lang;
                localStorage.setItem('wzzm_language', lang);
                if (typeof window.applySearchTranslations === 'function') {
                    window.applySearchTranslations();
                }
                console.log(`🌍 Idioma alterado para: "${lang}"`);
            },
            
            applySearchTranslations: window.applySearchTranslations
        };
        
        console.log('📚 Language Manager mínimo criado (compatível com search.js)');
    } else {
        console.log('✅ Language Manager existente encontrado. Integrando searchTranslations...');
        
        // Adiciona searchTranslations ao LanguageManager existente
        if (!LanguageManager.searchTranslations) {
            LanguageManager.searchTranslations = {};
        }
        
        // Copia as traduções já registradas
        Object.keys(window._searchTranslations).forEach(lang => {
            LanguageManager.searchTranslations[lang] = window._searchTranslations[lang];
        });
        
        // Adiciona função de aplicar traduções se não existir
        if (!LanguageManager.applySearchTranslations) {
            LanguageManager.applySearchTranslations = window.applySearchTranslations;
        }
        
        console.log('✅ Search translations integradas ao LanguageManager existente');
    }
    
    // ============================================
    // INICIALIZAÇÃO - NÃO INTERFERE NO search.js
    // ============================================
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(function() {
            try {
                window.applySearchTranslations();
                // Cria seletor de idioma
                createLanguageSelector();
            } catch(e) {
                console.warn('⚠️ Erro na inicialização:', e);
            }
        }, 500);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                try {
                    window.applySearchTranslations();
                    createLanguageSelector();
                } catch(e) {
                    console.warn('⚠️ Erro na inicialização:', e);
                }
            }, 500);
        });
    }
    
   function createLanguageSelector() {
    try {
        const container = document.getElementById('languageSelectorContainer');
        if (!container) return;
        
        if (container.querySelector('.lang-selector')) return;
        
        // ===== ADICIONE OS NOVOS IDIOMAS AQUI =====
        const languages = {
            'pt': { flag: '🇧🇷', name: 'Português' },
            'en': { flag: '🇺🇸', name: 'English' },
            'es': { flag: '🇪🇸', name: 'Español' },
            'fr': { flag: '🇫🇷', name: 'Français' },
            'de': { flag: '🇩🇪', name: 'Deutsch' },
            'it': { flag: '🇮🇹', name: 'Italiano' },
            'ja': { flag: '🇯🇵', name: '日本語' },
            'zh': { flag: '🇨🇳', name: '中文' }
        };
        
        const currentLang = localStorage.getItem('wzzm_language') || 'pt';
        
        let html = `<div class="lang-selector" style="position:relative;display:inline-block;">`;
        html += `<select onchange="window.changeSearchLanguage(this.value)" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:white;padding:4px 8px;border-radius:16px;font-size:12px;cursor:pointer;outline:none;">`;
        
        Object.entries(languages).forEach(([code, lang]) => {
            const selected = code === currentLang ? 'selected' : '';
            html += `<option value="${code}" ${selected}>${lang.flag} ${code.toUpperCase()}</option>`;
        });
        
        html += `</select></div>`;
        container.innerHTML = html;
        
        console.log('🌍 Seletor de idioma criado com ' + Object.keys(languages).length + ' idiomas');
    } catch(e) {
        console.warn('⚠️ Erro ao criar seletor de idioma:', e);
    }
}
    
    // ============================================
    // FUNÇÃO PARA MUDAR IDIOMA (NÃO QUEBRA A BUSCA)
    // ============================================
    window.changeSearchLanguage = function(lang) {
        try {
            localStorage.setItem('wzzm_language', lang);
            
            if (typeof LanguageManager !== 'undefined') {
                LanguageManager.currentLang = lang;
                if (typeof LanguageManager.changeLanguage === 'function') {
                    LanguageManager.changeLanguage(lang);
                }
            }
            
            if (typeof window.applySearchTranslations === 'function') {
                window.applySearchTranslations();
            }
            
            // Recria o seletor para mostrar o idioma atual
            createLanguageSelector();
            
            console.log(`🌍 Idioma alterado para: "${lang}"`);
        } catch(e) {
            console.warn('⚠️ Erro ao mudar idioma:', e);
        }
    };
    
    console.log('📚 Search Language Manager carregado (modo compatível)');
})();
