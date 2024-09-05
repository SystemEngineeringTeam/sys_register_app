import React from 'react';
import OrderMenueContena from '../components/OrderMenueContena';
import OrderMenueCustomize from '../components/OrderMenueCustomize';
import OrderMenueName from '../components/OrderMenueName';
import { Box, Grid, Stack } from '@mui/material';
import Yakitori from '/yakitori.png';
import YakitoriSolt from '/yakitori_solt.png';
import Negima from '/negima.png';

function OrderMenuLeft() {
  const ordernames = [
    { name: '塩', price: 300, img: Yakitori },
    { name: 'たれ', price: 300, img: YakitoriSolt },
    { name: 'ねぎま', price: 300, img: Negima },
    { name: 'もも', price: 300, img: YakitoriSolt },
    { name: 'コーラ', price: 100, img: Yakitori },
    { name: 'ファンタグレープ', price: 100, img: Yakitori },
  ];
  return (
    <div>
      <Box>
        <Box>
          {ordernames.map((order) => (
            <OrderMenueContena ordername={order.name} orderprice={order.price} orderimg={order.img} />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default OrderMenuLeft;
