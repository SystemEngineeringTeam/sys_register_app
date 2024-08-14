import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import OrderButton from './OrderButton';

function OrderMenuRight() {
  return (
    <div>
      <Box sx={{ position: 'fixed' }}>
        <Box sx={{ fontSize: '30px', pt: '30px' }}>注文番号</Box>
        <Box>
          <Box
            sx={{
              mt: '550px',
              fontSize: { xs: 'none', sm: 'none', md: '2rem' },
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
          >
            計
          </Box>
          <Box
            sx={{
              fontSize: { xs: 'none', sm: 'none', md: '3rem' },
              display: {
                xs: 'none',
                sm: 'none',
                md: 'block',
              },
            }}
          >
            1,600
          </Box>
        </Box>
        <Box><OrderButton /></Box>
      </Box>

      {/* <Box><OrderButton /></Box> */}
    </div>
  );
}

export default OrderMenuRight;
