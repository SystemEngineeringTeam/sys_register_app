import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import MoneyChenge from './MoneyChenge';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { type money } from '@/types';

interface CollectedChengeProps {
  // おつり
  chenge: number;
  oturiMoney: money;
  setOturiMoney: React.Dispatch<React.SetStateAction<money>>;
  todayMoney: money | undefined;
}
const CollectedChenge = ({ chenge, oturiMoney, setOturiMoney, todayMoney }: CollectedChengeProps) => {
  // おつりの金額から貨幣の数を出す関数
  function chengeQty(chengeAmount: number) {
    // setMoneyFncを使うための下準備
    type moneyKeyType = 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000;
    const moneyKey: moneyKeyType[] = [5000, 1000, 500, 100, 50, 10, 5, 1];
    // denominationsはresultのキーになる
    moneyKey.forEach((e) => {
      const count = Math.floor(chengeAmount / e);
      if (todayMoney !== undefined) {
        if (count > todayMoney[e]) {
          console.log('e Non', e);
          setMoneyFnc(todayMoney[e], e, setOturiMoney);
          // eslint-disable-next-line no-param-reassign
          chengeAmount -= todayMoney[e] * e; // 残りのおつりを次に回す
          // お釣りが払えない場合
          if (e === 1) {
            alert('お釣りが払えません');
          }
        } else {
          console.log('e Ok', e);
          setMoneyFnc(count, e, setOturiMoney);
          // eslint-disable-next-line no-param-reassign
          chengeAmount %= e; // 残りのおつりを次に回す
        }
      }
    });
  }
  useEffect(() => {
    chengeQty(chenge);
  }, [todayMoney]);
  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge ChengeCount={oturiMoney[1]} image="/money_1.svg" />
          <MoneyChenge ChengeCount={oturiMoney[5]} image="/money_5.svg" />
          <MoneyChenge ChengeCount={oturiMoney[10]} image="/money_10.svg" />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyChenge ChengeCount={oturiMoney[50]} image="/money_50.svg" />
          <MoneyChenge ChengeCount={oturiMoney[100]} image="/money_100.svg" />
          <MoneyChenge ChengeCount={oturiMoney[500]} image="/money_500.svg" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <MoneyChenge ChengeCount={oturiMoney[1000]} image="/money_1000.svg" />
        <MoneyChenge ChengeCount={oturiMoney[5000]} image="/money_5000.svg" />
        <MoneyChenge ChengeCount={0} image="/money_10000.svg" />
      </Box>
    </div>
  );
};

export default CollectedChenge;
