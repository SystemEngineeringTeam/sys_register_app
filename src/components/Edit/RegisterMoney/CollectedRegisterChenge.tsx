import { Box } from '@mui/material';
import React from 'react';
import RegisterChenge from './RegisterChenge';
// eslint-disable-next-line no-restricted-imports
import { type money } from '../../../types/index';

interface CollectedRegisterChengeProps {
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
}
const CollectedRegisterChenge = ({ setRegisterMoney }: CollectedRegisterChengeProps) => {
  return (
    <div>
      <Box sx={{ border: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <RegisterChenge image="/money_1.svg" moneyKind={1} setRegisterMoney={setRegisterMoney} />
          <RegisterChenge image="/money_5.svg" moneyKind={5} setRegisterMoney={setRegisterMoney} />
          <RegisterChenge image="/money_10.svg" moneyKind={10} setRegisterMoney={setRegisterMoney} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <RegisterChenge image="/money_50.svg" moneyKind={50} setRegisterMoney={setRegisterMoney} />
          <RegisterChenge image="/money_100.svg" moneyKind={100} setRegisterMoney={setRegisterMoney} />
          <RegisterChenge image="/money_500.svg" moneyKind={500} setRegisterMoney={setRegisterMoney} />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', marginTop: '2rem', border: 2 }}>
        <RegisterChenge image="/money_1000.svg" moneyKind={1000} setRegisterMoney={setRegisterMoney} />
        <RegisterChenge image="/money_5000.svg" moneyKind={5000} setRegisterMoney={setRegisterMoney} />
        <RegisterChenge image="/money_10000.svg" moneyKind={10000} setRegisterMoney={setRegisterMoney} />
      </Box>
    </div>
  );
};

export default CollectedRegisterChenge;
