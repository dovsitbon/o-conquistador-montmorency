# O Conquistador — site vitrine

Restaurant portugais à la braise, 93 avenue de Domont, 95160 Montmorency.
Astro + Tailwind CSS v4, site statique.

## Lancer en local
```bash
npm install
npm run dev        # http://localhost:4321
```

## Construire et vérifier
```bash
npm run build      # génère dist/
npm run preview    # sert dist/
npm run captures   # captures pleine page 390 px et 1440 px dans captures/ (port 4405)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Pousser le dépôt sur GitHub puis l'importer dans Vercel (Astro statique détecté automatiquement, aucun `vercel.json`).
Quand l'URL finale est connue, la reporter dans `astro.config.mjs` (`site`), `public/robots.txt` et `public/llms.txt`.

## Où changer quoi
| Quoi | Fichier |
|---|---|
| Téléphone, adresse, horaires, congés, réseaux, notes d'avis | `src/data/infos.json` |
| Dates de congés (statut « Fermé pour congés » automatique) | `src/data/infos.json` → `conges.debut` / `conges.fin` (AAAA-MM-JJ) |
| Plats, catégories, prix | `src/data/carte.json` (`prix: null` affiche « prix [À CONFIRMER] ») |
| Extraits d'avis | `src/data/avis.json` |
| Textes de l'accueil | `src/pages/index.astro` |
| Photos | remplacer les composants `<PhotoSlot>` par `<Image>` d'`astro:assets` (photos dans `src/assets/`), voir `PHOTOS_A_PRENDRE.md` |
| Motif azulejo | `public/azulejo.svg` (dessin original, aussi utilisé comme favicon) |
| Couleurs et polices | `src/styles/global.css` (bloc `@theme`) |
| Statut Ouvert / Fermé | `src/scripts/statut.ts` (heure de Paris) |

À faire avant mise en ligne : voir `A_COMPLETER.md`.
