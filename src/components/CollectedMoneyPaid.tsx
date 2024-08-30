import React from 'react';
import MoneyPaid from './MoneyPaid';
import { Box } from '@mui/material';

const CollectedMoneyPaid = () => {
  return (
    <div>
      <Box sx={{ border: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid image="/money_1.svg" />
          <MoneyPaid image="/money_5.svg" />
          <MoneyPaid image="/money_10.svg" />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <MoneyPaid image="/money_50.svg" />
          <MoneyPaid image="/money_100.svg" />
          <MoneyPaid image="/money_500.svg" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex',marginTop:'2rem', border:1 }}>
        <MoneyPaid image="/money_1000.svg" />
        <MoneyPaid image="/money_5000.svg" />
        <MoneyPaid image="/money_10000.svg" />
      </Box>
    </div>
  );
};

export default CollectedMoneyPaid;
