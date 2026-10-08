# FLOREVIEW — Audit du site institutionnel et proposition de refonte 2026

**Date d'observation :** 8 octobre 2026  
**Site étudié :** https://floreview.com/fr/  
**Nature du document :** audit UX/éditorial externe + concept de refonte indépendant. **Ce document ne constitue pas un audit de sécurité ni une mesure certifiée des performances.**

## 1. Contexte et objectifs

Le site actuel présente Floreview comme une plateforme de connaissances et d'informations pour les fleuristes et designers floraux. Le site propose notamment inspiration, base « Fleurs & Plantes », décoration, interviews, cours, blog, Florademy, agenda, offres d'emploi et adhésion. Le contenu éditorial est riche ; la proposition vise à le rendre plus identifiable, découvrable et simple à consulter sur mobile.

**Périmètre examiné :** accueil, navigation, inspiration et filtres, page « Qui sommes-nous ? », agenda, présentation des bénéfices de l'adhésion, contact et exemple d'article. Les pages réservées aux membres, le back-office et les données Analytics ne sont pas accessibles pour cet audit.

## 2. Audit — constats vérifiables

| Axe | Constat dans le site public | Impact possible | Recommandation | Priorité |
|---|---|---|---|---|
| Proposition de valeur | L'accueil expose plusieurs objectifs (inspiration, informations, techniques, durabilité) et neuf accès thématiques. | Priorité d'action moins évidente sur un premier écran. | Hero clair, un CTA inspiration et un CTA adhésion, puis parcours par public. | Haute |
| Navigation | Accès hiérarchisés sous « Voir », « Découvrir », « Lire », plus contact et adhésion. | Navigation pouvant demander plusieurs décisions. | Menu principal court et CTA « Devenir membre » distinct. | Haute |
| Inspiration | Filtres thème, saison, couleur, fleur, designer et matériel avec listes longues. Parmi les libellés relevés figurent des variantes et doublons (ex. « Eté/Été », « Terrasse/Terras », « Intérieur/Interieur »). | Recherche moins lisible et taxonomie difficile à maintenir. | Recherche unifiée, filtres progressifs, normalisation et dictionnaire multilingue. | Haute |
| Actualités | L'accueil recense de nombreux articles dans un long flux. | Des contenus importants peuvent être noyés. | Mise en avant éditoriale 1+3, cartes par thème et page d'archive filtrable. | Haute |
| Agenda | Présence de vues liste/mois/jour et de nombreux événements ; les résultats varient selon les pages et dates consultées. | Un lecteur peut voir des événements passés sans contexte suffisant. | Tri « À venir », date/lieu homogènes, mise à jour CMS et signalement des événements clos. | Moyenne |
| Adhésion | Les avantages sont documentés (deux newsletters par mois, fiches imprimables, techniques, interviews, soutien aux jeunes talents). | La valeur peut être mieux présentée avant conversion. | Page dédiée aux bénéfices et CTA clair vers le parcours réel. | Haute |
| Langues | Plusieurs libellés néerlandais apparaissent dans des pages francophones (ex. catégories éditoriales ; « Lid worden? »). | Cohérence éditoriale et SEO multilingue. | Plan FR/NL, glossaire et contrôle éditorial avant publication. | Haute |
| Contact | Coordonnées et formulaire sont présents. | Aucun problème technique démontré, mais parcours à harmoniser. | CTA visible ; formulaire réel seulement après accord et intégration backend. | Moyenne |
| Cookies | Texte introductif de consentement et panneau de gestion sont visibles dans le contenu public. | Nécessité d'une revue UX et juridique, sans présumer d'une non-conformité. | Consentement granulaire, test de blocage des traceurs avant opt-in, audit RGPD. | Haute |
| Indexation / performance / accessibilité | Aucun accès au back-office, à CrUX, Search Console ou au serveur ; aucun résultat Lighthouse certifié établi dans ce rapport. | Les performances et la conformité ne peuvent être quantifiées honnêtement. | Mesurer LCP, INP, CLS, WCAG 2.2 AA, SEO, poids images sur le site réel. | À mesurer |

### Sources vérifiées sur le site public
- Accueil : https://floreview.com/fr/
- Inspiration / taxonomie et filtres : https://floreview.com/fr/inspiration/
- Qui sommes-nous / valeurs : https://floreview.com/fr/qui-sommes-nous/
- Adhésion — démonstration / bénéfices : https://floreview.com/fr/demo/
- Agenda : https://floreview.com/fr/agenda/
- Contact : https://floreview.com/fr/contact/
- Conditions d'adhésion et propriétaire du service : https://floreview.com/fr/conditions-generales/
- Exemple d'article : https://floreview.com/fr/award-nieuw-floraal-talent-2026/

## 3. Benchmark graphique — inspiration 2026, sans reproduction

Les quatre références suivantes sont des **inspirations de principes d'interface**, pas des modèles à copier. L'analyse décrit les catégories et structures visibles sur leurs sites actuels ; elle ne prétend pas dater chaque détail de leur design de 2026.

| Référence | Signal utile | Traduction pour Floreview |
|---|---|---|
| Oatly — https://www.oatly.com/ | Univers de marque très identifiable, contenu organisé autour des produits, des actualités, de la durabilité et d'une voix propre. | Plus de caractère typographique et un langage editorial moins institutionnel. |
| Danone — https://www.danone.com/ | Mission claire, séparation marque / actualités / engagements / innovation et approche modulaire. | Hiérarchie éditoriale, contenus de mission et valorisation de la communauté. |
| Barilla — https://www.barilla.com/ | Identité produit et univers lifestyle présentés en parcours distincts. | Grand visuel d'ambiance et segmentation claire inspiration/ressources. |
| innocent — https://www.innocentdrinks.co.uk/ | Ton accessible et personnalisation de marque. | Titres chaleureux, microcopie directe et appels à l'action compréhensibles. |

**Principes appliqués :** grande photographie d'ambiance, composition bento, titres éditoriaux expressifs, espaces maîtrisés, palette organique (vert profond + crème + accents rose/corail), interactions légères, contraste suffisant et responsive.

## 4. Contenu et architecture proposés

Navigation : **Accueil / Inspirations / Le journal / Agenda / Notre mission** + CTA **Devenir membre**. Pages secondaires **Adhésion** et **Contact**.

- **Accueil :** hero + grands accès thématiques + sélection éditoriale + mission + agenda + adhésion.
- **Inspirations :** galerie catégorisée avec recherche et filtre fonctionnels. **Visuels d'ambiance de démonstration, pas une copie du catalogue officiel.**
- **Journal :** titres et résumés brefs, liens sortants vers articles originaux. Pas de copie intégrale d'articles.
- **Agenda :** deux rendez-vous futurs identifiés dans l'accueil au 8 octobre 2026, avec renvoi vers l'agenda officiel ; une intégration CMS serait nécessaire pour la production.
- **Notre mission :** quatre valeurs annoncées par l'équipe ; énoncés rédigés comme reformulations concises.
- **Adhésion :** bénéfices explicitement annoncés sur le site officiel ; aucune souscription ni simulation de paiement dans le prototype.
- **Contact :** coordonnées publiques avec `mailto:` ; aucune collecte de données dans la maquette.

## 5. Correctifs techniques réalisés dans la maquette

- HTML sémantique multi-pages, titres H1/H2, liens et états focus visibles ; nom de page dans `<title>`.
- Menu mobile avec `aria-expanded`, ouverture/fermeture clavier et fermeture avec Échap.
- Filtres par catégorie, recherche instantanée et message « aucun résultat ».
- Liens relatifs, compatibles avec GitHub Pages sous `/floreview/`.
- Fallback local SVG si une photo de démonstration ne charge pas.
- Design responsive avec préférence système de réduction des animations.
- Pages sensibles non factices : pas de formulaire ni paiement simulé.
- Balise `noindex,nofollow` et `robots.txt` : **prévisualisation non officielle qui ne doit pas concurrencer le référencement de Floreview**.
- Page d'erreur 404 personnalisée.

## 6. Points à faire valider avec Floreview avant une mise en ligne officielle

1. **Droits et marque :** autorisation d'utiliser le nom, la charte graphique officielle, les photos, articles et logos. La maquette contient pour l'instant un logo typographique conceptuel différent du logo officiel. Antwoord BV est identifié dans les conditions générales comme propriétaire du service.
2. **Sources des images :** les photos utilisées ici sont des visuels d'ambiance externes (Unsplash). Vérifier licences, auteurs et hébergement ; remplacer idéalement par la photothèque autorisée de la société. Voir `assets/README.md`.
3. **Contenus membres :** mise en relation avec la base de comptes/abonnements et contrôle d'accès existants. Une copie statique du site ne les remplace pas.
4. **CMS et traduction :** plan de migration des articles, taxonomies, filtres et langues FR/NL, redirections SEO et gestion des médias.
5. **Accessibilité :** tests manuels VoiceOver/NVDA, clavier complet, zoom 200/400 %, WCAG 2.2 AA avant acceptation.
6. **Performance :** tests Lighthouse mobile et Web Vitals sur l'hébergement final, compression des médias, éventuel self-hosting des polices.
7. **Juridique :** cookies/consentement, confidentialité, mentions légales et CGV validées par l'équipe compétente.
8. **Éditorial :** dates d'événements et actualités mises à jour via le CMS ; validité des URLs originales.

## 7. Verdict

**Recommandation :** proposer cette maquette comme un **prototype de direction artistique et d'architecture éditoriale**, pas comme un remplacement instantané du site en production. Le livrable permet d'évaluer le design, le parcours et les interactions, puis de préparer une intégration technique professionnelle après validation par Floreview.
