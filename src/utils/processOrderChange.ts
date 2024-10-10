import { type items, type order } from '../types';

// 注文変更を処理する関数
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

// 注文数変更を処理する関数
export const processNumber = (processsnum: order[]): Array<{ qty: number | null }> => {
  return processsnum.map((items) => {
    return {
      qty: items.qty || null,
    };
  });
};
