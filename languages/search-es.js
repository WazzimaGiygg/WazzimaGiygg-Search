// languages/search-es.js
const searchTranslationsEs = {
    // Header
    'search_titulo': 'WazzimaGiygg Search',
    'search_subtitulo': 'Búsqueda Inteligente',
    'entrar': 'Iniciar Sesión',
    'sair': 'Cerrar Sesión',
    'visitante': 'Visitante',
    'carregando': 'Cargando...',
    'aguarde': 'espere',
    'admin': 'Admin',
    'banido': 'Baneado',
    
    // Search
    'busca_titulo': 'WazzimaGiygg',
    'busca_descricao': 'Búsqueda inteligente para sus productos y servicios',
    'modo_convidado': 'Modo Invitado - Búsqueda habilitada',
    'modo_usuario': 'Hola, {nome}',
    
    // Search Box
    'placeholder_busca': 'Busque productos, servicios, páginas...',
    'botao_buscar': 'Buscar',
    'botao_ver_todas': 'Ver todas las páginas',
    'info_paginas': 'Más de {total} páginas disponibles para búsqueda',
    
    // Results
    'resultados_para': '📄 {total} resultado{s} para "{termo}"',
    'resultados_todos': '📄 {total} resultado{s} para "todos"',
    'nenhum_resultado': 'No se encontraron resultados',
    'nenhum_resultado_texto': 'Intente buscar otro término o verifique la ortografía.',
    'fechar_resultados': 'Cerrar resultados',
    
    // Notifications
    'notificacoes': '🔔 Notificaciones',
    'marcar_todas_lidas': 'Marcar todas como leídas',
    'nenhuma_notificacao': 'Sin notificaciones',
    'notificacao': 'Notificación',
    
    // Modal Login
    'entrar_conta': 'Iniciar sesión en su cuenta',
    'continuar_google': 'Continuar con Google',
    'ou': 'o',
    'email': 'Correo electrónico',
    'senha': 'Contraseña',
    'entrar_email': 'Iniciar sesión con correo',
    'criar_conta': 'Crear nueva cuenta',
    
    // Captcha Maze
    'verificacao_seguranca': '🔐 Verificación de Seguridad',
    'verificacao_texto': 'Para continuar usando la búsqueda, complete el laberinto.',
    'maze_status': '⭐ Lleve el personaje hasta la bandera 🏁',
    'maze_sucesso': '🎉 ¡FELICIDADES! Acceso concedido! 🎉',
    
    // Banned
    'conta_banida': '⚠️ Cuenta Baneada',
    'conta_banida_texto': 'Su cuenta ha sido baneada permanentemente del sistema.',
    'motivo': 'Motivo:',
    'erro_banimento': 'Si cree que es un error, contacte al soporte.',
    'sair_conta': '🚪 Cerrar sesión',
    
    // Footer
    'doacao': '💝 Donación',
    'desktop': '🖥️ Escritorio',
    'lgpd': '🔒 Privacidad',
    'marco_civil': '📜 Derechos Civiles',
    'ticket': '🎫 Soporte',
    'produtos': '🛍️ Productos',
    'sua_conta': '👤 Su cuenta',
    'search_copyright': '© 2026 WazzimaGiygg Search - Búsqueda inteligente y libre',
    
    // Toast / Messages
    'logout_sucesso': '¡Sesión cerrada exitosamente!',
    'conta_criada': '¡Cuenta creada exitosamente!',
    'erro_login': 'Error al iniciar sesión:',
    'erro_criar_conta': 'Error al crear cuenta:',
    'erro_logout': 'Error al cerrar sesión:',
    'captcha_necessario': '¡Complete el laberinto de verificación primero!',
    'aguarde_carregando': 'Cargando WazzimaGiygg Search...'
};

if (typeof LanguageManager !== 'undefined') {
    LanguageManager.registerLanguage('es', searchTranslationsEs);
}
