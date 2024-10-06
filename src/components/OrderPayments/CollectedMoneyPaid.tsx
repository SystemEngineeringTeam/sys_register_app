import React from 'react';
import MoneyPaid from './MoneyPaid';
import { Box } from '@mui/material';

interface CollectedMoneyPaidProps {
  moneyCount1: number;
  setMoneyCount1: React.Dispatch<React.SetStateAction<number>>;
  moneyCount5: number;
  setMoneyCount5: React.Dispatch<React.SetStateAction<number>>;
  moneyCount10: number;
  setMoneyCount10: React.Dispatch<React.SetStateAction<number>>;
  moneyCount50: number;
  setMoneyCount50: React.Dispatch<React.SetStateAction<number>>;
  moneyCount100: number;
  setMoneyCount100: React.Dispatch<React.SetStateAction<number>>;
  moneyCount500: number;
  setMoneyCount500: React.Dispatch<React.SetStateAction<number>>;
  moneyCount1000: number;
  setMoneyCount1000: React.Dispatch<React.SetStateAction<number>>;
  moneyCount5000: number;
  setMoneyCount5000: React.Dispatch<React.SetStateAction<number>>;
  moneyCount10000: number;
  setMoneyCount10000: React.Dispatch<React.SetStateAction<number>>;
}
const CollectedMoneyPaid = ({
  moneyCount1,
  setMoneyCount1,
  moneyCount5,
  setMoneyCount5,
  moneyCount10,
  setMoneyCount10,
  moneyCount50,
  setMoneyCount50,
  moneyCount100,
  setMoneyCount100,
  moneyCount500,
  setMoneyCount500,
  moneyCount1000,
  setMoneyCount1000,
  moneyCount5000,
  setMoneyCount5000,
  moneyCount10000,
  setMoneyCount10000,
}: CollectedMoneyPaidProps) => {
  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid count={moneyCount1} image="/money_1.svg" setCount={setMoneyCount1} />
          <MoneyPaid count={moneyCount5} image="/money_5.svg" setCount={setMoneyCount5} />
          <MoneyPaid count={moneyCount10} image="/money_10.svg" setCount={setMoneyCount10} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid count={moneyCount50} image="/money_50.svg" setCount={setMoneyCount50} />
          <MoneyPaid count={moneyCount100} image="/money_100.svg" setCount={setMoneyCount100} />
          <MoneyPaid count={moneyCount500} image="/money_500.svg" setCount={setMoneyCount500} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <MoneyPaid image="/money_1000.svg" count={moneyCount1000} setCount={setMoneyCount1000} />
        <MoneyPaid image="/money_5000.svg" count={moneyCount5000} setCount={setMoneyCount5000} />
        <MoneyPaid image="/money_10000.svg" count={moneyCount10000} setCount={setMoneyCount10000} />

      </Box>
    </div>
  );
};

export default CollectedMoneyPaid;
