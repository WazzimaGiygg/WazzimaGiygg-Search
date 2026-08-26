// languages/search-en.js
const searchTranslationsEn = {
    // Header
    'search_titulo': 'WazzimaGiygg Search',
    'search_subtitulo': 'Smart Search',
    'entrar': 'Sign In',
    'sair': 'Sign Out',
    'visitante': 'Guest',
    'carregando': 'Loading...',
    'aguarde': 'please wait',
    'admin': 'Admin',
    'banido': 'Banned',
    
    // Search
    'busca_titulo': 'WazzimaGiygg',
    'busca_descricao': 'Smart search for your products and services',
    'modo_convidado': 'Guest Mode - Search enabled',
    'modo_usuario': 'Hello, {nome}',
    
    // Search Box
    'placeholder_busca': 'Search for products, services, pages...',
    'botao_buscar': 'Search',
    'botao_ver_todas': 'View all pages',
    'info_paginas': '{total} pages available for search',
    
    // Results
    'resultados_para': '📄 {total} result{s} for "{termo}"',
    'resultados_todos': '📄 {total} result{s} for "all"',
    'nenhum_resultado': 'No results found',
    'nenhum_resultado_texto': 'Try searching for another term or check the spelling.',
    'fechar_resultados': 'Close results',
    
    // Notifications
    'notificacoes': '🔔 Notifications',
    'marcar_todas_lidas': 'Mark all as read',
    'nenhuma_notificacao': 'No notifications',
    'notificacao': 'Notification',
    
    // Modal Login
    'entrar_conta': 'Sign in to your account',
    'continuar_google': 'Continue with Google',
    'ou': 'or',
    'email': 'Email',
    'senha': 'Password',
    'entrar_email': 'Sign in with email',
    'criar_conta': 'Create new account',
    
    // Captcha Maze
    'verificacao_seguranca': '🔐 Security Verification',
    'verificacao_texto': 'To continue using the search, complete the maze below.',
    'maze_status': '⭐ Take the character to the flag 🏁',
    'maze_sucesso': '🎉 CONGRATULATIONS! Access granted! 🎉',
    
    // Banned
    'conta_banida': '⚠️ Banned Account',
    'conta_banida_texto': 'Your account has been permanently banned from the system.',
    'motivo': 'Reason:',
    'erro_banimento': 'If you believe this is an error, please contact support.',
    'sair_conta': '🚪 Sign out',
    
    // Footer
    'doacao': '💝 Donation',
    'desktop': '🖥️ Desktop',
    'lgpd': '🔒 Privacy',
    'marco_civil': '📜 Civil Rights',
    'ticket': '🎫 Support',
    'produtos': '🛍️ Products',
    'sua_conta': '👤 Your Account',
    'search_copyright': '© 2026 WazzimaGiygg Search - Smart and free search',
    
    // Toast / Messages
    'logout_sucesso': 'Logged out successfully!',
    'conta_criada': 'Account created successfully!',
    'erro_login': 'Login error:',
    'erro_criar_conta': 'Error creating account:',
    'erro_logout': 'Logout error:',
    'captcha_necessario': 'Complete the verification maze first!',
    'aguarde_carregando': 'Loading WazzimaGiygg Search...'
};

if (typeof LanguageManager !== 'undefined') {
    LanguageManager.registerLanguage('en', searchTranslationsEn);
}
