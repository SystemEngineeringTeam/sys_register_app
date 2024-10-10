import { category, type items } from '@/types';

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
export function categoryIdToCategoryName(allCategorys:category[] | undefined,categoryId: string | undefined) {
  if (allCategorys !== undefined) {
    const selectCategory = allCategorys?.find((e) => {
      return categoryId === e.id;
    });
    console.log("selectCategory!",selectCategory?.name);
    return selectCategory?.name;
  }
  return '';
}