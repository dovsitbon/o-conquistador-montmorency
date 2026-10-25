# Prompt Claude Code : site « O Conquistador » (restaurant portugais, Montmorency)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet du restaurant **O Conquistador**. Objectif business : réservations (le soir, la réservation est recommandée), faire connaître la braise et les viandes, et donner une vraie maison en ligne à une adresse qui a déjà 4 000+ abonnés Facebook.

## Fiche d'identité (informations vérifiées)
- **Nom** : O Conquistador
- **Type** : restaurant portugais, grillades **à la braise**, viandes premium, poissons, spécialités portugaises
- **Adresse** : 93 avenue de Domont, 95160 Montmorency
- **Téléphone** : 01 34 28 60 37
- **Horaires** : mardi, mercredi, jeudi : 11h30–14h00 · vendredi et samedi : 11h30–14h00 et 19h30–21h30 · dimanche et lundi : fermé
- **Fermeture annuelle** : en été (en 2024 : du 31 juillet au 2 septembre) → bloc « Congés » éditable
- **Note** : 4,6/5 sur ~490 avis Google ; Facebook « 100 % recommandé » (~300 avis) ; TripAdvisor 4,2/5 (66 avis)
- **Services** : salle + **terrasse aménagée**, bar, traiteur, livraison, menu enfant, chaises hautes, accessible fauteuil roulant, parking gratuit dans la rue
- **Paiements** : CB, sans contact
- **Réseaux** : Facebook « O conquistador montmorency » (facebook.com/p/O-conquistador-montmorency-100063699574687), Instagram @o.conquistador95160mc (compte de Mickael Coutinho, lié au restaurant)
- **Ville** : la commune le référence sur ville-montmorency.fr (économie locale)
- **Schema.org** : `Restaurant` (servesCuisine : Portuguese ; acceptsReservations : true)

## Ce que disent les clients
Patron « aux petits soins », accueil chaleureux et familial, viandes de qualité à la cuisson parfaite à la braise, plats très copieux, frites maison, riz, haricots noirs, champignons, morue, dorade grillée, desserts maison, **flan maison**, terrasse agréable, adaptable pour les enfants.

Extraits d'avis utilisables (« Avis Google ») :
- « Des viandes premium à la cuisson à la braise juste parfaite, accompagnées de frites maison, de champignons, de riz et de haricots noirs. Desserts également maison. »
- « Un service magnifique avec un patron aux petits soins pour le client. L'un des meilleurs restaurants portugais en Île-de-France. »
- « J'ai dégusté une dorade absolument délicieuse, cuite à la perfection. La terrasse est très agréable et joliment aménagée. »
- « On nous a même proposé d'adapter certains plats pour notre petite fille de 2 ans. »
- « Pour goûter l'ensemble des viandes, il faut revenir. »

## Direction artistique
- Inspiration : **azulejos bleus et blancs, braise, tavernes de Lisbonne et Porto**. Chaleureux, généreux, festif (l'établissement communique en « Olé Olé, ça se passe au Conquistador »).
- Palette : bleu cobalt azulejo, blanc cassé chaux, noir charbon, accent rouge brique ou orange braise.
- Typo : une display à caractère (ex. Playfair Display italique, ou une grotesque condensée style enseigne) + une sans lisible.
- Idée signature : **motif azulejo dessiné en SVG** (créé par toi, original) en frise/séparateurs, et une section « La braise » sombre avec le texte qui s'éclaire comme des braises.

## Structure
1. **Accueil** : nom, « Cuisine portugaise à la braise, à Montmorency », boutons Réserver (tel:) + Voir la carte, statut ouvert/fermé, bloc congés éditable.
2. **La braise** : la cuisson, les viandes, les poissons (dorade, morue), les accompagnements maison.
3. **La carte** : catégories (entrées, viandes à la braise, poissons, spécialités, menu enfant, desserts maison dont flan, vins portugais), plats cités, prix `[À CONFIRMER]`, fichier `src/data/carte.json`.
4. **La maison** : patron aux petits soins, accueil familial, terrasse, enfants bienvenus (adaptations possibles).
5. **Avis** : 5 extraits + 4,6/5 Google + « 100 % recommandé » Facebook.
6. **Groupes & traiteur** : anniversaires, repas de famille, commandes traiteur.
7. **Infos pratiques** : horaires (midi du mardi au samedi, soir vendredi/samedi seulement → le dire clairement), réservation recommandée le soir, adresse, parking, carte.
8. Liens Facebook + Instagram dans le footer.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
