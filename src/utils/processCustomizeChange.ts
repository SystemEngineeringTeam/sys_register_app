import { type options } from '../types';

// カスタマイズ変更を処理する関数
export const processCustomizeChange = (customchange: options[]): Array<{ name: string; price: number }> => {
  return customchange.map((options) => {
    return {
      name: options.name,
      price: options.price,
    };
  });
};
