// languages/search-fr.js
const searchTranslationsFr = {
    // Header
    'search_titulo': 'WazzimaGiygg Search',
    'search_subtitulo': 'Recherche Intelligente',
    'entrar': 'Se Connecter',
    'sair': 'Déconnexion',
    'visitante': 'Visiteur',
    'carregando': 'Chargement...',
    'aguarde': 'veuillez patienter',
    'admin': 'Admin',
    'banido': 'Banni',
    
    // Search
    'busca_titulo': 'WazzimaGiygg',
    'busca_descricao': 'Recherche intelligente pour vos produits et services',
    'modo_convidado': 'Mode Invité - Recherche activée',
    'modo_usuario': 'Bonjour, {nome}',
    
    // Search Box
    'placeholder_busca': 'Recherchez des produits, services, pages...',
    'botao_buscar': 'Rechercher',
    'botao_ver_todas': 'Voir toutes les pages',
    'info_paginas': 'Plus de {total} pages disponibles pour la recherche',
    
    // Results
    'resultados_para': '📄 {total} résultat{s} pour "{termo}"',
    'resultados_todos': '📄 {total} résultat{s} pour "tous"',
    'nenhum_resultado': 'Aucun résultat trouvé',
    'nenhum_resultado_texto': 'Essayez de chercher un autre terme ou vérifiez l\'orthographe.',
    'fechar_resultados': 'Fermer les résultats',
    
    // Notifications
    'notificacoes': '🔔 Notifications',
    'marcar_todas_lidas': 'Tout marquer comme lu',
    'nenhuma_notificacao': 'Aucune notification',
    'notificacao': 'Notification',
    
    // Modal Login
    'entrar_conta': 'Connectez-vous à votre compte',
    'continuar_google': 'Continuer avec Google',
    'ou': 'ou',
    'email': 'E-mail',
    'senha': 'Mot de passe',
    'entrar_email': 'Se connecter avec e-mail',
    'criar_conta': 'Créer un nouveau compte',
    
    // Captcha Maze
    'verificacao_seguranca': '🔐 Vérification de Sécurité',
    'verificacao_texto': 'Pour continuer à utiliser la recherche, complétez le labyrinthe.',
    'maze_status': '⭐ Emmenez le personnage jusqu\'au drapeau 🏁',
    'maze_sucesso': '🎉 FÉLICITATIONS! Accès accordé! 🎉',
    
    // Banned
    'conta_banida': '⚠️ Compte Banni',
    'conta_banida_texto': 'Votre compte a été banni définitivement du système.',
    'motivo': 'Motif:',
    'erro_banimento': 'Si vous pensez qu\'il s\'agit d\'une erreur, contactez le support.',
    'sair_conta': '🚪 Se déconnecter',
    
    // Footer
    'doacao': '💝 Donation',
    'desktop': '🖥️ Bureau',
    'lgpd': '🔒 Vie Privée',
    'marco_civil': '📜 Droits Civils',
    'ticket': '🎫 Support',
    'produtos': '🛍️ Produits',
    'sua_conta': '👤 Votre Compte',
    'search_copyright': '© 2026 WazzimaGiygg Search - Recherche intelligente et libre',
    
    // Toast / Messages
    'logout_sucesso': 'Déconnexion réussie!',
    'conta_criada': 'Compte créé avec succès!',
    'erro_login': 'Erreur de connexion:',
    'erro_criar_conta': 'Erreur de création de compte:',
    'erro_logout': 'Erreur de déconnexion:',
    'captcha_necessario': 'Complétez d\'abord le labyrinthe de vérification!',
    'aguarde_carregando': 'Chargement de WazzimaGiygg Search...'
};

if (typeof LanguageManager !== 'undefined') {
    LanguageManager.registerLanguage('fr', searchTranslationsFr);
}
