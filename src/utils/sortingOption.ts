import { items, options } from "@/types";

// IDが一緒のoptionを取得する関数
export const sortingOption = (Ids: string[],itemOption:options[]) => {

    // Idsの配列に一致するoptionを取得
    const option = itemOption.filter((option) => Ids.map((id) => option.id === id));

    return option;

};
