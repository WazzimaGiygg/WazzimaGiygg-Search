// languages/search-de.js
const searchTranslationsDe = {
    // Header
    'search_titulo': 'WazzimaGiygg Search',
    'search_subtitulo': 'Intelligente Suche',
    'entrar': 'Anmelden',
    'sair': 'Abmelden',
    'visitante': 'Gast',
    'carregando': 'Laden...',
    'aguarde': 'bitte warten',
    'admin': 'Admin',
    'banido': 'Gesperrt',
    
    // Search
    'busca_titulo': 'WazzimaGiygg',
    'busca_descricao': 'Intelligente Suche für Ihre Produkte und Dienstleistungen',
    'modo_convidado': 'Gastmodus - Suche aktiviert',
    'modo_usuario': 'Hallo, {nome}',
    
    // Search Box
    'placeholder_busca': 'Suchen Sie Produkte, Dienstleistungen, Seiten...',
    'botao_buscar': 'Suchen',
    'botao_ver_todas': 'Alle Seiten anzeigen',
    'info_paginas': 'Mehr als {total} Seiten für die Suche verfügbar',
    
    // Results
    'resultados_para': '📄 {total} Ergebnis{se} für "{termo}"',
    'resultados_todos': '📄 {total} Ergebnis{se} für "alle"',
    'nenhum_resultado': 'Keine Ergebnisse gefunden',
    'nenhum_resultado_texto': 'Versuchen Sie einen anderen Suchbegriff oder überprüfen Sie die Schreibweise.',
    'fechar_resultados': 'Ergebnisse schließen',
    
    // Notifications
    'notificacoes': '🔔 Benachrichtigungen',
    'marcar_todas_lidas': 'Alle als gelesen markieren',
    'nenhuma_notificacao': 'Keine Benachrichtigungen',
    'notificacao': 'Benachrichtigung',
    
    // Modal Login
    'entrar_conta': 'Melden Sie sich an',
    'continuar_google': 'Mit Google fortfahren',
    'ou': 'oder',
    'email': 'E-Mail',
    'senha': 'Passwort',
    'entrar_email': 'Mit E-Mail anmelden',
    'criar_conta': 'Neues Konto erstellen',
    
    // Captcha Maze
    'verificacao_seguranca': '🔐 Sicherheitsüberprüfung',
    'verificacao_texto': 'Um die Suche weiter zu nutzen, absolvieren Sie das Labyrinth.',
    'maze_status': '⭐ Bringen Sie die Figur zur Flagge 🏁',
    'maze_sucesso': '🎉 GLÜCKWUNSCH! Zugang gewährt! 🎉',
    
    // Banned
    'conta_banida': '⚠️ Gesperrtes Konto',
    'conta_banida_texto': 'Ihr Konto wurde dauerhaft aus dem System verbannt.',
    'motivo': 'Grund:',
    'erro_banimento': 'Wenn Sie glauben, dass dies ein Fehler ist, kontaktieren Sie den Support.',
    'sair_conta': '🚪 Abmelden',
    
    // Footer
    'doacao': '💝 Spende',
    'desktop': '🖥️ Desktop',
    'lgpd': '🔒 Datenschutz',
    'marco_civil': '📜 Bürgerrechte',
    'ticket': '🎫 Support',
    'produtos': '🛍️ Produkte',
    'sua_conta': '👤 Ihr Konto',
    'search_copyright': '© 2026 WazzimaGiygg Search - Intelligente und freie Suche',
    
    // Toast / Messages
    'logout_sucesso': 'Erfolgreich abgemeldet!',
    'conta_criada': 'Konto erfolgreich erstellt!',
    'erro_login': 'Anmeldefehler:',
    'erro_criar_conta': 'Fehler beim Erstellen des Kontos:',
    'erro_logout': 'Abmeldefehler:',
    'captcha_necessario': 'Absolvieren Sie zuerst das Verifikations-Labyrinth!',
    'aguarde_carregando': 'WazzimaGiygg Search wird geladen...'
};

if (typeof LanguageManager !== 'undefined') {
    LanguageManager.registerLanguage('de', searchTranslationsDe);
}
