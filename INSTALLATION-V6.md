# Floreview V6 — recherche éditoriale et nouvelle identité

## Contenu

- Recherche plein écran accessible sur toutes les pages de la maquette sauf la page 404.
- Suggestions immédiates parmi les rubriques internes et les trois articles disponibles dans les données de démonstration.
- Trois accès rapides : Presse & médias, Commerce international, Skills & savoir-faire.
- Navigation clavier et mobile, bouton de fermeture, et lien « Devenir membre » conservé dans le menu mobile.
- Nouveau pictogramme de marque à quatre formes : fleur, presse/dialogue, monde, compétences/transmission.
- Nouveau logo SVG net à toutes les tailles, favicon, pictogramme au survol ; explorations PNG fournies à titre de référence.
- Trois pages thématiques nouvelles : presse.html, international.html, savoir-faire.html.

## Fichiers à importer

Décompresser le ZIP, puis téléverser **tous** les fichiers et sous-dossiers vers la racine du dépôt `netmoov/floreview`. Ne pas téléverser l'archive ZIP comme fichier du site.

Le dépôt GitHub Pages doit utiliser la branche `main`, le dossier `/(root)` et un `index.html` à la racine.

## Recherche : périmètre

La recherche est un moteur **côté navigateur**, sans serveur : elle suggère uniquement les pages de cette maquette, quelques liens éditoriaux et les articles contenus dans `data/articles.js`. Elle n'interroge pas tout le site officiel `floreview.com`.

Pour une exploitation réelle : brancher la recherche au CMS Floreview, récupérer les articles/communiqués officiels et ajouter une indexation véritable.

## Marque et validation

Ce projet est une **proposition indépendante non officielle**, non approuvée par la société Floreview ; le logo et le positionnement « Presse / Fleurs / Commerce international / Skills » sont des propositions créatives à valider. La recherche et les trois pages ne prétendent pas que des services particuliers sont déjà commercialisés par la société.

## Vérification

- Analyse structurelle HTML et de liens locaux : OK.
- Analyse CSS et syntaxe JavaScript : OK.
- Tests unitaires légers de suggestions de recherche : OK.
- Test visuel dans Chromium : non réalisé car l'environnement bloque les accès locaux du navigateur. Contrôler sur smartphone et ordinateur après déploiement.
