// ============================================
// SEARCH.JS - WazzimaGiygg Search
// ============================================

// ==================== FUNÇÃO DE TRADUÇÃO ====================
function getTranslation(key, params = {}) {
    if (typeof LanguageManager !== 'undefined' && LanguageManager.translate) {
        return LanguageManager.translate(key, params);
    }
    return key;
}

// ==================== FUNÇÃO PARA APLICAR TRADUÇÕES ====================
function applySearchTranslations() {
    if (typeof LanguageManager === 'undefined') return;
    
    // Aplica traduções a elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = LanguageManager.translate(key);
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
    
    // Placeholders específicos
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = getTranslation('placeholder_busca');
    }
}

// ==================== FUNÇÃO PARA MUDAR IDIOMA ====================
async function changeSearchLanguage(lang) {
    if (typeof LanguageManager !== 'undefined') {
        await LanguageManager.changeLanguage(lang);
        applySearchTranslations();
        updatePageInfo();
    }
}

// ==================== ATUALIZAR INFORMAÇÕES DA PÁGINA ====================
function updatePageInfo() {
    const pageCount = document.getElementById('page-count');
    if (pageCount) {
        const total = allPages.length || 0;
        pageCount.textContent = getTranslation('info_paginas', { total: total });
    }
    
    // Atualiza título
    const title = document.querySelector('title');
    if (title) {
        title.textContent = getTranslation('search_titulo');
    }
}
