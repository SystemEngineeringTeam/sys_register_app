// 型定義する

import { CollectionReference, DocumentData } from 'firebase/firestore';

export type options_id = string;
export type items_id = string;
export type user_props = string | null;

// userの型を定義
export interface developer {
  uid: string;
  password: string;
}

// itemsの型を定義
export interface items {
  id: string;
  name: string;
  price: number;
  visible: boolean;
  category_id: string;
  options: options[];
  imgUrl: string;
}

export interface itemsData {
  name: string;
  price: number;
  visible: boolean;
  category_id: string;
  options: options[];
  imgUrl: string;
}

//　shop_userの型を定義
export interface shop_user {
  id: string;
  name: string;
  category: category[];
  item: items[];
  options: options[];
  orderCollection: orderCollection[];
}

// categoryの型を定義
export interface category {
  id: string;
  name: string;
}

// optionsの型を定義

export interface categoryData {
  name: string;
}

// optionsの型を定義
export interface options {
  id: string;
  name: string;
  price: number;
}

// orderの型を定義
export interface order {
  id: string;
  item: items;
  options: options[];
  qty: number;
}
export interface orderData {
  item: items;
  options: options[];
  qty: number;
}

// orderの更新用の型を定義
export interface UpdateOrder {
  items_id: items_id[];
}

// orderCollectionの型を定義
export interface orderCollection {
  id: string;
  order: order[];
  timestamp: number; // ミリ秒で保存
  accounting: boolean; // 会計
  cooking: boolean; // 調理
  offer: boolean; // 提供
}

// moneyの型を定義
export interface money {
  date: number;
  '10000': number;
  '5000': number;
  '1000': number;
  '500': number;
  '100': number;
  '50': number;
  '10': number;
  '5': number;
  '1': number;
  total: number;
}

// moneyのData型を定義
export interface moneyData {
  '10000': number;
  '5000': number;
  '1000': number;
  '500': number;
  '100': number;
  '50': number;
  '10': number;
  '5': number;
  '1': number;
  total: number;
}

// category
export interface category {
  id: string;
  name: string;
}

export interface Data {
  item: CollectionReference<DocumentData, DocumentData>;
  options: Array<CollectionReference<DocumentData, DocumentData>>;
  qty: number;
}
