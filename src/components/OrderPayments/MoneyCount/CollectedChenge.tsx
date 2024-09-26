import { Box } from '@mui/material';
import React from 'react';
import MoneyChenge from './MoneyChenge';

interface CollectedChengeProps {
  // おつり
  chenge: number;
}
const CollectedChenge = ({ chenge }: CollectedChengeProps) => {
  // おつりの金額から貨幣の数を出す関数
  function chengeQty(chengeAmount: number) {
    // denominationsはresultのキーになる
    const denominations = [5000, 1000, 500, 100, 50, 10, 5, 1];
    const result: Record<number, number> = {};

    denominations.forEach((denomination) => {
      const count = Math.floor(chengeAmount / denomination);
      result[denomination] = count;
      // eslint-disable-next-line no-param-reassign
      chengeAmount %= denomination; // 残りのおつりを次に回す
    });

    return result;
  }
  const moneyCounter = chengeQty(chenge);
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