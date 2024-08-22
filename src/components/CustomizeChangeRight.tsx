import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';
import OkeyButton from './OkeyButton';
import OrderDelete from './OrderDelete';

function CustomizeChangeRight() {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Box sx={{ fontSize: '30px', mt: '50px' }}>注文番号</Box>

        <Box sx={{mt:'100%'}}>
        <Box > <OrderDelete /> </Box>
        <Box sx={{mt:'30px'}}><OkeyButton /></Box> 
        </Box>
      

      </Box>

      {/* <Box><OrderButton /></Box> */}
    </div>
  );
}

export default CustomizeChangeRight;
