// zodによるバリテーションチェック
// バリテーションチェックとは入力値が正しい形式や範囲に合致しているかどうかを検証すること
import { z } from 'zod';

// RegisterChenge.tsxにて使用
// 入力フィールドに入れられたお金の枚数をバリテーションチェックする
// string型 正規表現にて 0,正の整数値,空文字を許容 空文字はNumber.parseIntでNaNになることに注意
export const moneyCountScheme = z.string().regex(/^(0|[1-9][0-9]*|)$/);
// typeも作っているが、現状使っているところはない
export type moneyCountType = z.infer<typeof moneyCountScheme>;
