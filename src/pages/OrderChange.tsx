import React from 'react';
import OrderMenueContena from '../components/OrderMenueContena';
import OrderMenueCustomize from '../components/OrderMenueCustomize';
import OrderMenueName from '../components/OrderMenueName';
import { Box, Grid, Stack } from '@mui/material';

const OrderChange = () => {
  const ordername = ['塩', 'たれ', 'ねぎま', 'もも', 'コーラ', 'ファンタグレープ'];

  return (
    <div>
      <Stack direction="row">
        <Box>
          {ordername.map((order) => (
            <OrderMenueContena ordername={order} />
          ))}
        </Box>
        <Box>注文番号</Box>
      </Stack>
    </div>
  );
};

export default OrderChange;
