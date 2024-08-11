// 型定義する

export type opthons_id = string;
export type items_id = string;

// itemsの型を定義
export interface items{
    id: string;
    user_id: string;
    name: number;
    price: number;
    visible: boolean;
    category_id: string;
    opthons_id: opthons_id[];
}

//　shop_userの型を定義
export interface shop_user{
    id: string;
    name: string;
}

//categoryの型を定義
export interface category{
    id: string;
    name: string;
}

//optionsの型を定義
export interface options{
    id: string;
    name: string;
    price: number;
}

//orderの型を定義
export interface order{
    id: string;
    items_id: items_id[];
    timestamp: number;
}
