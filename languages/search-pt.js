// languages/search-pt.js
const searchTranslationsPt = {
    // Header
    'search_titulo': 'WazzimaGiygg Search',
    'search_subtitulo': 'Busca Inteligente',
    'entrar': 'Entrar',
    'sair': 'Sair',
    'visitante': 'Visitante',
    'carregando': 'Carregando...',
    'aguarde': 'aguarde',
    'admin': 'Admin',
    'banido': 'Banido',
    
    // Search
    'busca_titulo': 'WazzimaGiygg',
    'busca_descricao': 'Busca inteligente para seus produtos e serviços',
    'modo_convidado': 'Modo Convidado - Busca liberada',
    'modo_usuario': 'Olá, {nome}',
    
    // Search Box
    'placeholder_busca': 'Pesquise produtos, serviços, páginas...',
    'botao_buscar': 'Buscar',
    'botao_ver_todas': 'Ver todas as páginas',
    'info_paginas': 'Mais de {total} páginas disponíveis para busca',
    
    // Results
    'resultados_para': '📄 {total} resultado{s} para "{termo}"',
    'resultados_todos': '📄 {total} resultado{s} para "todos"',
    'nenhum_resultado': 'Nenhum resultado encontrado',
    'nenhum_resultado_texto': 'Tente buscar por outro termo ou verifique a ortografia.',
    'fechar_resultados': 'Fechar resultados',
    
    // Notifications
    'notificacoes': '🔔 Notificações',
    'marcar_todas_lidas': 'Marcar todas como lidas',
    'nenhuma_notificacao': 'Nenhuma notificação',
    'notificacao': 'Notificação',
    
    // Modal Login
    'entrar_conta': 'Entrar na sua conta',
    'continuar_google': 'Continuar com Google',
    'ou': 'ou',
    'email': 'E-mail',
    'senha': 'Senha',
    'entrar_email': 'Entrar com e-mail',
    'criar_conta': 'Criar nova conta',
    
    // Captcha Maze
    'verificacao_seguranca': '🔐 Verificação de Segurança',
    'verificacao_texto': 'Para continuar usando a busca, complete o labirinto abaixo.',
    'maze_status': '⭐ Leve o personagem até a bandeira 🏁',
    'maze_sucesso': '🎉 PARABÉNS! Acesso liberado! 🎉',
    
    // Banned
    'conta_banida': '⚠️ Conta Banida',
    'conta_banida_texto': 'Sua conta foi banida permanentemente do sistema.',
    'motivo': 'Motivo:',
    'erro_banimento': 'Se você acredita que isso é um erro, entre em contato com o suporte.',
    'sair_conta': '🚪 Sair da conta',
    
    // Footer
    'doacao': '💝 Doação',
    'desktop': '🖥️ Desktop',
    'lgpd': '🔒 LGPD',
    'marco_civil': '📜 Marco Civil',
    'ticket': '🎫 Ticket',
    'produtos': '🛍️ Produtos',
    'sua_conta': '👤 Sua conta',
    'search_copyright': '© 2026 WazzimaGiygg Search - Busca inteligente e livre',
    
    // Toast / Messages
    'logout_sucesso': 'Logout realizado com sucesso!',
    'conta_criada': 'Conta criada com sucesso!',
    'erro_login': 'Erro ao fazer login:',
    'erro_criar_conta': 'Erro ao criar conta:',
    'erro_logout': 'Erro ao sair:',
    'captcha_necessario': 'Complete o labirinto de verificação primeiro!',
    'aguarde_carregando': 'Carregando WazzimaGiygg Search...'
};

// Registra no LanguageManager
if (typeof LanguageManager !== 'undefined') {
    LanguageManager.registerLanguage('pt', searchTranslationsPt);
}
