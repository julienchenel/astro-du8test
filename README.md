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

## Écrire avec Decap CMS (en local)

Decap CMS sert d'interface de rédaction, **uniquement sur ta machine** : il n'y a
aucun serveur ni connexion en ligne. Il écrit directement les fichiers Markdown
dans `src/content/`, que tu publies ensuite avec un commit et un push.

```bash
docker compose up
```

Puis ouvre http://localhost:4321/astro-du8test/admin/index.html.

- `site` lance `astro dev` (Node 24), `cms` lance `decap-server` sur le port 8081.
- Sans Docker, avec Node 24 : `npm run dev` et `npm run cms` dans deux terminaux.
- La configuration des champs est dans `public/admin/config.yml`.
- `/admin` est retiré du build : il n'existe pas sur le site publié.

## Déploiement

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui build le site et le publie sur GitHub Pages.
