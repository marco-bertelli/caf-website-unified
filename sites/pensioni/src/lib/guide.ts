import { getCollection, type CollectionEntry } from 'astro:content';

export const guideOrdinate = async () => (await getCollection('guide')).sort((a, b) => a.data.ordine - b.data.ordine);

export const minutiLettura = (g: CollectionEntry<'guide'>) =>
  Math.max(2, Math.round((g.body ?? '').split(/\s+/).length / 200));

export const meseAnno = (d: Date) => d.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });
