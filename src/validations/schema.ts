// zodによるバリテーションチェック
// バリテーションチェックとは入力値が正しい形式や範囲に合致しているかどうかを検証すること
import { z } from 'zod';
import { options } from '../types/index';

// RegisterChenge.tsxにて使用
// 入力フィールドに入れられたお金の枚数をバリテーションチェックする
// string型 正規表現にて 0,正の整数値,空文字を許容 空文字はNumber.parseIntでNaNになることに注意
export const moneyCountSchema = z.string().regex(/^(0|[1-9][0-9]*|)$/);
// typeも作っているが、現状使っているところはない
export type moneyCountType = z.infer<typeof moneyCountSchema>;
//
// export interface itemsData {
//   name: string;
//   price: number;
//   visible: boolean;
//   category_id: string;
//   options: options[];
//   imgUrl: string;
// }
// 入力された商品のデータ型を判断するスキーマ
// 入力された名前が重複していないか判断する必要がある imageNameTypeを返す関数が必要
export const itemsDataSchema = z.object({
  // 今ある商品名のユニオン型を作成する関数が必要 itemNameTypeがほしい
  //   name: z
  //     .string()
  //     .min(1, '名前を入力してください')
  //     .max(50, '名前が長すぎます')
  //     .refine((targetType) => {
  //       const result = Object.keys(itemNameType).find((type) => type !== itemNameType);
  //       return !(result == null);
  //     }, '同じ名前の商品がすでに存在します'),
  price: z.number().min(0),
  visible: z.boolean(),
  //   enumでやってもいい
  // 今あるカテゴリー名のユニオン型を作成する関数が必要 categoryTypeを返す関数を作るべき
  //   category: z.string().refine((targetType) => {
  //     const result = Object.keys(categoryType).find((type) => type === targetType);
  //     return !(result == null);
  //   }, '存在しないカテゴリーです'),
  // 重複options配列内で重複したnameが存在しないことを見たい
  options: z
    .object({
      name: z.string(),
      price: z.number(),
    })
    .array(),
  imageUrl: z.string().url('urlが取得できません'),
});
export type editMenuType = z.infer<typeof itemsDataSchema>;
// 入力されるカテゴリー名がいいかどうか
// カテゴリー名が重複していないかを判断しなければならない
export const categorySchema = z.string().min(1).max(50);
export type categoryType = z.infer<typeof categorySchema>;
