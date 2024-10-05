import { type items, type order } from '../types';

export const processOrderChange = (
  processcollection: items[],
): Array<{ name: string | null; price: number | null }> => {
  return processcollection.map((items) => {
    return {
      name: items.name || null,
      price: items.price || null,
    };
  });
};

export const processNumber = (processsnum: order[]): Array<{ qty: number | null }> => {
  return processsnum.map((items) => {
    return {
      qty: items.qty || null,
    };
  });
};
