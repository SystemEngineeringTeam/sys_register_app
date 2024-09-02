import { Box } from '@mui/material';
import React from 'react';

interface OrderWaitPeopleProps {
  orders: number[];
}

const OrderWaitPeople = ({ orders }: OrderWaitPeopleProps) => {
  return (
    <div>
      <Box
        sx={{
          position: 'fixed', //下に固定する
          bottom: '0px',
          right: '0', //横全体を写すため
          left: '0', //横全体を写すため
          background: '#c8c8c8',
          textAlign: 'center',
          fontSize: '60px',
        }}
      >
        支払い待ち人数 : {orders.length}人
      </Box>
    </div>
  );
};

export default OrderWaitPeople;
