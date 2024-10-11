import { type items } from '@/types';

// export function getItemNameType(itemArr: items[]) {
//   const itemName = itemArr.map((e) => {
//     return e.name;
//   });
//   return itemName;
// }
// item名が重複するかどうかを判断する関数
export function getItemNameDuplication(itemsData: items[] | undefined, newName: string | undefined) {
  const item = itemsData?.find((e) => {
    return e.name === newName;
  });
  if (item === undefined || newName !== undefined) {
    return true;
  }
  return false;
}