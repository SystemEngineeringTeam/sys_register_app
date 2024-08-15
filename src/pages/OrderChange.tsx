import React from 'react';
import OrderMenuLeft from '../components/OrderMenuLeft';
import OrderMenuRight from '../components/OrderMenuRight';
import { Box, Grid, Stack } from '@mui/material';
import OrderButton from '../components/OrderButton';

const OrderChange = () => {
  return (
    <div > 
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        {/* 左側メニューリスト */}
        <Box>
          <OrderMenuLeft />
        </Box>

        {/* 右側注文情報 */}
        <Box>
          <Box sx={{left:'50%',transform:'translateX(-50%)'}}>
          <OrderMenuRight />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OrderChange;
