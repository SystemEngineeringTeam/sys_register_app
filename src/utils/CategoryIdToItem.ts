import { type items } from '@/types';

export function cateforyIdToItems(allItems: items[] | undefined, categoryId: string) {
  if (allItems !== undefined) {
    const selectItems = allItems.filter((item) => {
      return categoryId === item.category_id;
    });
    return selectItems;
  }
  const item: items[] = [];
  return item;
}
