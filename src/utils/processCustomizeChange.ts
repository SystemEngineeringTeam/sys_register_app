import { type options } from '../types';

export const processCustomizeChange = (customchange: options[]): Array<{ name: string; price: number }> => {
  return customchange.map((options) => {
    return {
      name: options.name,
      price: options.price,
    };
  });
};
