# Floreview V7 — contenus et parcours métiers (octobre 2026)

## Objectif
Intégrer les enseignements de l'audit FFAF/UNF sans transformer Floreview en syndicat : trois parcours intuitifs, accès aux contenus officiels existants, quatre pôles professionnels, adhésion plus compréhensible. La direction graphique émotionnelle et le logo rose fourni par l’utilisateur sont conservés.

## Ce qui fonctionne dans la maquette
- Accueil avec parcours S’inspirer / Apprendre / Se connecter.
- Une page `ressources.html` contenant 16 liens documentés vers le site Floreview (filtres thématiques, recherche texte, indicateur de résultats, filtre lié à l’URL).
- Recherche globale enrichie par les mêmes 16 ressources (clavier, raccourcis, fermeture, suggestions).
- Trois pages Presse, International et Skills désormais alimentées par quatre ressources chacune.
- Carte d’orientation vers l’adhésion, sans recréer un paiement ou un compte.
- Liens externes clairement signalés, vers l’original, sans duplication d’articles.
- Site statique utilisable avec GitHub Pages, responsive, accessible clavier et animations réduites si demandé.

## Limites explicites
- La bibliothèque est une sélection éditoriale figée, **pas une synchronisation** avec le CMS ni un moteur indexant l’ensemble du site officiel.
- Les URL originales renvoient vers Floreview : leur disponibilité peut évoluer.
- Les trois pages professionnelles et les textes de la maquette sont des propositions, pas des services annoncés officiellement.
- Aucun espace membre, paiement, dépôt de CV, formation certifiante ou collecte de données n’est simulé.
- FFAF et UNF sont citées comme organisations **indépendantes**, pas comme partenaires.
- `noindex,nofollow` est conservé pour cette proposition non officielle et publique.

## Déploiement
Remplacer le contenu du dépôt `netmoov/floreview` par tous les fichiers du ZIP, avec `index.html` à la racine. Activer GitHub Pages : Settings → Pages → Deploy from a branch → main → /(root). Laisser `netmoov/botanique` inchangé.

## Nouveaux fichiers
- `ressources.html`
- `data/ressources-v7.json`
- `data/ressources-v7.js`
- `v7.css`
- `v7.js`

## À valider avant une proposition officielle
Direction éditoriale, positionnement Presse / International / Skills, photos, droits de marque, contenus, traductions FR/NL, SEO, accessibilité, intégration CMS et conditions d’adhésion.
