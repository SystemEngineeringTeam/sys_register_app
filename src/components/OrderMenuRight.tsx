import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';

function OrderMenuRight() {
  return (
    <div>
      <Box sx={{textAlign:'center'}}>
        <Box sx={{ fontSize: '30px', mt: '50px'}}>注文番号</Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display:'flex',alignItems:'center', mt: '400px' }}>
            <Box sx={{
                ml:'25%',
                fontSize:'30px',
                verticalAlign:'bottom',
                mt:'200px'
            }}>計
          </Box>
          <Box
            sx={{
              fontSize:'50px',
              mt:'200px'
            }}
          >
            1,600
          </Box>
        </Box>
        <Box sx={{mt:'20px'}}>
          <OrderButton />
        </Box>
      </Box>
      </Box>

      {/* <Box><OrderButton /></Box> */}
    </div>
  );
}

export default OrderMenuRight;
