# Au fil de la pagaie

Blog sur le kayak construit avec [Astro](https://astro.build), publié sur GitHub Pages :
https://julienchenel.github.io/astro-test/

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

Le site est alors sur http://localhost:4321/astro-test/.

## Écrire des articles avec Sveltia CMS

L'interface de rédaction est [Sveltia CMS](https://github.com/sveltia/sveltia-cms),
compatible avec la configuration Decap. Elle ne demande **aucun serveur**.
Sa configuration est dans `public/admin/config.yml`.

### En ligne

1. Ouvre https://julienchenel.github.io/astro-test/admin/
2. Choisis **Sign In with Token** et colle un jeton d'accès personnel GitHub :
   un *fine-grained token* limité au dépôt `astro-test`, avec la permission
   **Contents : Read and write**.
3. Chaque enregistrement crée un commit sur `main`, ce qui republie le site
   en une à deux minutes.

Le jeton reste dans ton navigateur. Ne le partage pas et donne-lui une date d'expiration.

### En local

Avec `npm run dev` lancé, ouvre http://localhost:4321/astro-test/admin/index.html
dans Chrome ou Edge, choisis **Work with Local Repository** et sélectionne le
dossier du projet. Les fichiers sont modifiés directement sur le disque ;
publie-les ensuite avec un commit et un push.

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui build le site et le publie sur GitHub Pages.
