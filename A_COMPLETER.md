# À compléter avant mise en ligne

Chaque point correspond à un marqueur `[À CONFIRMER]` visible sur le site, ou à une donnée volontairement omise faute de source.

## La carte (`src/data/carte.json`)
- [ ] Tous les prix (actuellement `null` → « prix [À CONFIRMER] »).
- [ ] Liste des entrées.
- [ ] Viandes à la braise : pièces proposées, grammages, cuissons.
- [ ] Morue : préparation(s) proposée(s).
- [ ] Spécialités portugaises : liste.
- [ ] Menu enfant : composition et prix.
- [ ] Desserts maison autres que le flan.
- [ ] Vins portugais : références, verre / bouteille.
- [ ] Les accompagnements (frites, riz, haricots noirs, champignons) sont-ils inclus avec les plats ou vendus à part ?

## Congés (`src/data/infos.json` → `conges`)
- [ ] Dates de la prochaine fermeture d'été (renseigner `debut` et `fin` : le statut passera automatiquement à « Fermé pour congés »).

## Groupes & traiteur (`src/pages/index.astro`, section `#groupes`)
- [ ] Nombre de couverts maximum pour un groupe / privatisation possible ?
- [ ] Traiteur : délais de commande, quantités minimales.
- [ ] Livraison : zone, jours, plateforme éventuelle (Uber Eats, Deliveroo…), frais.

## Mentions légales (`src/pages/mentions-legales.astro`)
- [ ] Raison sociale et forme juridique.
- [ ] SIRET.
- [ ] Numéro de TVA intracommunautaire.
- [ ] Directeur de la publication (nom du gérant).
- [ ] Adresse e-mail de contact.

## Données omises (pas de marqueur visible)
- [ ] Coordonnées GPS (latitude / longitude) du 93 avenue de Domont : à ajouter dans `infos.json` → `"geo": { "latitude": ..., "longitude": ... }` ; elles seront alors injectées dans le JSON-LD.
- [ ] Nom du patron (les avis parlent d'un « patron aux petits soins », le nom n'est pas confirmé). Le compte Instagram est celui de Mickael Coutinho : confirmer son rôle avant de le citer.
- [ ] Gamme de prix (`priceRange` du JSON-LD), à ajouter une fois les prix connus.
- [ ] Lien direct vers la fiche Google (avis) pour un bouton « Laisser un avis ».
- [ ] Notes et nombres d'avis (4,6 / ~490 Google, ~300 Facebook, 4,2 / 66 TripAdvisor) : à mettre à jour de temps en temps dans `infos.json`.
- [ ] Les notes ne sont pas déclarées en `aggregateRating` dans le JSON-LD (Google ignore les avis « auto-déclarés » d'un établissement sur son propre site).

## Photos
- [ ] Voir `PHOTOS_A_PRENDRE.md` (3 emplacements sur l'accueil + photo de partage).

## Après déploiement
- [ ] Remplacer `https://o-conquistador-montmorency.vercel.app` par l'URL finale dans `astro.config.mjs`, `public/robots.txt`, `public/llms.txt`.
- [ ] Déclarer le site dans Google Search Console et sur la fiche Google Business Profile, ainsi que sur la page Facebook et le compte Instagram.
