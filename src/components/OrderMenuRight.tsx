import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';

function OrderMenuRight() {
  return (
    <div>
      <Box >
        <Box sx={{ fontSize: '30px', mt: '50px',textAlign:'center' }}>注文番号</Box>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Box sx={{display:'flex',alignItems:'center',mt:'400px'}}>
          <Box
            sx={{
              fontSize: '30px',
              verticalAlign: 'bottom',
            }}
          >
            計
          </Box>
          <Box
            sx={{
              fontSize: '50px',
            }}
          >
            1,600
          </Box>
        </Box>
        <Box sx={{mt:'20px'}}><OrderButton /></Box>
        </Box>
      </Box>
    </div>
  );
}

export default OrderMenuRight;
