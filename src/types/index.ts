// 型定義する

export type options_id = string;
export type items_id = string;

// itemsの型を定義
export interface items {
  id: string;
  user_id: string;
  name: number;
  price: number;
  visible: boolean;
  category_id: string;
  options_id: options_id[];
}

//　shop_userの型を定義
export interface shop_user {
  id: string;
  name: string;
}

//categoryの型を定義
export interface category {
  id: string;
  name: string;
}

//optionsの型を定義
export interface options {
  id: string;
  name: string;
  price: number;
}

//orderの型を定義
export interface order {
  id: string;
  item: items;
  options: options[];
  qty: number;
}

// orderの更新用の型を定義
export interface UpdateOrder {
  items_id: items_id[];
}

//orderCollectionの型を定義
export interface orderCollection {
  id: string;
  order: order[];
  timestamp: number; //ミリ秒で保存
  accounting: boolean; //会計
  cooking: boolean; //調理
  offer: boolean; //提供
}
