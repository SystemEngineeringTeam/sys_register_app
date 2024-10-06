import { Box } from '@mui/material';
import React from 'react';
import OkeyButton from './OkeyButton';
import OrderDelete from './OrderDelete';

const CustomizeChangeRight = () => {
  return (
    <div>
      <Box
        sx={{
          flexDirection: 'column',
          position: 'fixed',
          height: '100vh',
          width: '20vw',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ fontSize: '30px', mt: '20px' }}>注文番号</Box>

        <Box sx={{ mt: '500px' }}>
          <Box>
            <OrderDelete />
          </Box>
          <Box sx={{ mt: '50px' }}>
            <OkeyButton />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CustomizeChangeRight;
