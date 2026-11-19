import { getCollection, type CollectionEntry } from 'astro:content';

export async function articlesTries(): Promise<CollectionEntry<'articles'>[]> {
  const articles = await getCollection('articles');
  return articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const formatDate = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' });

export function dateLongue(date: Date): string {
  return formatDate.format(date);
}

export function initiales(nom: string): string {
  return nom
    .split(' ')
    .map((mot) => mot[0])
    .join('')
    .toUpperCase();
}

/** Préfixe un chemin interne avec la base du site (ex. /astro-test/ sur GitHub Pages). */
export function lien(chemin: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${chemin}`;
}
