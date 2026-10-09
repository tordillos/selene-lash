import { getCollection, type CollectionKey } from 'astro:content';

/** Devuelve una colección ordenada por su campo `order`. */
export async function getSorted<C extends CollectionKey>(collection: C) {
  const entries = await getCollection(collection);
  return entries.sort((a, b) => (a.data as { order: number }).order - (b.data as { order: number }).order);
}

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

export function formatPrice(price: number, from = false): string {
  return from ? `desde ${euro.format(price)}` : euro.format(price);
}
