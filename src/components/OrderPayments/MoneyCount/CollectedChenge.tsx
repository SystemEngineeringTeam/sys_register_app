import { Box } from '@mui/material';
import React from 'react';
import MoneyChenge from './MoneyChenge';
// eslint-disable-next-line no-restricted-imports
import { useMoney } from '../../../firebase/useMoney';
// eslint-disable-next-line no-restricted-imports
import { type money } from '../../../types';

interface CollectedChengeProps {
  // おつり
  chenge: number;
}
// お釣りの画像を表示する
const CollectedChenge = ({ chenge }: CollectedChengeProps) => {
  // money: money[] | undefined をとってくる
  const { money } = useMoney();
  function getTodayMoney(moneyArr: money[] | undefined) {
    // moneyがundefinedの可能性をなくす
    if (moneyArr === undefined) {
      return undefined;
    }
    // 今日のmoneyを取ってくる（現在は仮置き)
    const date = 1725634800000;
    const todayMoney = moneyArr.find((m) => {
      return m.date === date;
    });
    return todayMoney;
  }

  // おつりの金額から貨幣の数を出す関数
  function chengeQty(chengeAmount: number) {
    // 今日のレジにあるお金をmoney型で返す関数
    const todayMoney = getTodayMoney(money);
    if (todayMoney === undefined) {
      return undefined;
    }
    // 扱いやすいデータにするためにデータを成形
    // money型のままだとtodayMoney[denomination]でエラーになる
    const moneyRec: Record<number, number> = {
      10000: todayMoney[10000],
      5000: todayMoney[5000],
      1000: todayMoney[1000],
      500: todayMoney[500],
      100: todayMoney[100],
      50: todayMoney[50],
      10: todayMoney[10],
      5: todayMoney[5],
      1: todayMoney[1],
    };
    // denominationsはresultのキーになる
    const denominations = [5000, 1000, 500, 100, 50, 10, 5, 1];
    // 戻り値
    const result: Record<number, number> = {};
    denominations.forEach((denomination) => {
      // おつりを計算
      const count = Math.floor(chengeAmount / denomination);
      // ちょうどいい釣り銭が切れていたとき
      if (count > moneyRec[denomination]) {
        result[denomination] = moneyRec[denomination];
        // eslint-disable-next-line no-param-reassign
        chengeAmount -= denomination * moneyRec[denomination]; // 残りのおつりを次に回す
        // お釣りが支払えないとき 戻り値を undefined にする
        if (denomination === 1) {
          result[denomination] = -1;
        }
      } else {
        result[denomination] = count;
        // eslint-disable-next-line no-param-reassign
        chengeAmount %= denomination; // 残りのおつりを次に回す
      }
    });
    // おつりが払えないとき
    if (result[1] === -1) {
      return undefined;
    }
    return result;
  }
  const moneyCounter = chengeQty(chenge);
  // 釣り銭が切れていたときはこちらが表示される
  if (moneyCounter === undefined) {
    return <h1>釣り銭切れです</h1>;
  }
  return (
    <div>
      <Box sx={{ border: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge image="/money_1.svg" ChengeCount={moneyCounter[1]} />
          <MoneyChenge image="/money_5.svg" ChengeCount={moneyCounter[5]} />
          <MoneyChenge image="/money_10.svg" ChengeCount={moneyCounter[10]} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge image="/money_50.svg" ChengeCount={moneyCounter[50]} />
          <MoneyChenge image="/money_100.svg" ChengeCount={moneyCounter[100]} />
          <MoneyChenge image="/money_500.svg" ChengeCount={moneyCounter[500]} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem', border: 2 }}>
        <MoneyChenge image="/money_1000.svg" ChengeCount={moneyCounter[1000]} />
        <MoneyChenge image="/money_5000.svg" ChengeCount={moneyCounter[5000]} />
        <MoneyChenge image="/money_10000.svg" ChengeCount={0} />
      </Box>
    </div>
  );
};

export default CollectedChenge;
