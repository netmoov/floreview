# Floreview V7 — proposition non officielle de refonte

Cette V7 conserve **le logo rose transmis par l’utilisateur**, l’esthétique émotionnelle ivoire/corail/sauge et les animations florales, avec une bibliothèque de 16 ressources officielles et trois parcours métiers. Les liens mènent à leurs sources originales ; il n’y a pas d’intégration du CMS ni d’espace membre.

Lire **INSTALLATION-V7.md** pour la liste exacte des modifications et la publication sur GitHub Pages.

---

## Historique des concepts précédents

# Floreview — proposition de refonte ciel & fleurs (2026)

**Version actuelle :** interface blanche et bleu cobalt, portrait de fleuriste, scènes florales, nuages et soleil animés. Toutes les photos principales sont des créations originales locales. Voir `GUIDE-REFONTE-CIEL-2026.md`.

---

# Floreview — Concept de refonte institutionnelle 2026

**Prototype indépendant à présenter à la société Floreview. Il n'est pas affilié ni approuvé par Floreview.** Ce dépôt est **distinct** de l'application de révision botanique `netmoov/botanique`.

## Ce que contient le site

Huit pages HTML (`index`, `inspirations`, `journal`, `agenda`, `apropos`, `adhesion`, `contact`, `404`), feuille CSS originale, script JavaScript sans dépendances, identité conceptuelle SVG, données d'articles externes, audit et instructions de mise en ligne. Les pages institutionnelles sont des maquettes fonctionnelles et responsives.

## Essayer localement

Ouvrir `index.html` dans le navigateur ou démarrer un serveur :

```bash
python3 -m http.server 8080
```

puis visiter `http://localhost:8080`.

## Mettre dans https://github.com/netmoov/floreview

Au moment de la préparation, l'URL GitHub demandée renvoie **404** (dépôt introuvable ou non accessible au connecteur). Il faut donc créer le dépôt **floreview** sous `netmoov`, ou donner accès au dépôt s'il est privé.

1. Créer le dépôt `netmoov/floreview` et y téléverser les fichiers et dossiers **du contenu de ce ZIP**, en conservant leur arborescence (`assets/`, `data/`).
2. Faire un commit, par exemple `Concept refonte Floreview 2026`.
3. Dans **Settings → Pages**, choisir **Deploy from a branch → main / (root)**, puis enregistrer.
4. La prévisualisation sera accessible à `https://netmoov.github.io/floreview/` si GitHub Pages est activé et que la configuration le permet.

Le site est conçu pour un hébergement sous-répertoire : pas d'URL absolue `/` pour les fichiers locaux.

## Avant d'en faire un site officiel

- Autorisation de la société pour la marque et le contenu.
- Validation des photos, polices, textes, données d'adhésion et légales.
- Mise en place d'un CMS et raccordement des articles/événements/pages membres, **non inclus** dans ce prototype.
- Contrôle SEO/relocations 301, accessibilité WCAG, performance et RGPD.

## Non-indexation volontaire

Toutes les pages incluent `noindex,nofollow` et le `robots.txt` interdit l'indexation. Cette protection est volontaire pendant la phase de proposition. Ne la retirer qu'après autorisation de Floreview et validation de la stratégie SEO.

## Sources et audit

Consulter [AUDIT.md](AUDIT.md), ainsi que [assets/README.md](assets/README.md). Pour les contenus éditoriaux, la maquette renvoie vers `floreview.com/fr/` au lieu de dupliquer les articles. Les liens d'adhésion restent sur le site officiel.


## Mise à jour V6.1

Cette version remplace le logo conceptuel par le logo Floreview fourni par l’utilisateur, intégré avec fond transparent dans l’en-tête, le pied de page, la recherche et le favicon.
