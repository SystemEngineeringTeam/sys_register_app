import React from 'react';
import MoneyPaid from './MoneyPaid';
import { Box } from '@mui/material';
import { type money } from '@/types';

interface CollectedMoneyPaidProps {
  setPaymentMoney: React.Dispatch<React.SetStateAction<money>>;
}
const CollectedMoneyPaid = ({ setPaymentMoney }: CollectedMoneyPaidProps) => {
  return (
    <div>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid image="/money_1.svg" num={1} setPaymentMoney={setPaymentMoney} />
          <MoneyPaid image="/money_5.svg" num={5} setPaymentMoney={setPaymentMoney} />
          <MoneyPaid image="/money_10.svg" num={10} setPaymentMoney={setPaymentMoney} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid image="/money_50.svg" num={50} setPaymentMoney={setPaymentMoney} />
          <MoneyPaid image="/money_100.svg" num={100} setPaymentMoney={setPaymentMoney} />
          <MoneyPaid image="/money_500.svg" num={500} setPaymentMoney={setPaymentMoney} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem' }}>
        <MoneyPaid image="/money_1000.svg" num={1000} setPaymentMoney={setPaymentMoney} />
        <MoneyPaid image="/money_5000.svg" num={5000} setPaymentMoney={setPaymentMoney} />
        <MoneyPaid image="/money_10000.svg" num={10000} setPaymentMoney={setPaymentMoney} />
      </Box>
    </div>
  );
};

export default CollectedMoneyPaid;
