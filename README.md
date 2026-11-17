# Au fil de la pagaie

Blog sur le kayak construit avec [Astro](https://astro.build), publié sur GitHub Pages :
https://julienchenel.github.io/astro-du8test/

## Contenu

- `src/content/auteurs/*.md` : un fichier par auteur (le nom du fichier sert d'identifiant).
- `src/content/articles/*.md` : un fichier par article ; le champ `auteur` reprend l'identifiant d'un auteur.

Le schéma des deux collections est dans `src/content.config.ts`.

## Développement

Astro 7 demande Node 24 (voir `.nvmrc`).

```bash
npm install
npm run dev
```

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui build le site et le publie sur GitHub Pages.
