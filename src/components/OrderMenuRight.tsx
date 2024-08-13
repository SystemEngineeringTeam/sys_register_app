import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';

function OrderMenuRight() {
  return (
    <div>
      <Box sx={{  ml: '27%', position:'fixed',top:'9px',fontSize:'30px'}}>
        <Box>注文番号</Box>
        <Box>
          <Box sx={{  paddingY: '550px' }}>計<Box sx={{ position:'fixed',fontSize: '50px' ,}}>1,600</Box></Box>
          
        </Box>
      </Box>
      <Box><OrderButton /></Box>
    </div>
  );
}

export default OrderMenuRight;
