import { Box, Button, Grid } from '@mui/material';
import React from 'react';

function OrderButton() {
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        size="large"
        onClick={() => {
          console.log('お支払いへ');
        }}
        sx={{
          background: '#F68B1F',
          py: '20px', // 必要に応じてパディングを調整
          width: '70%',
        }}
      >
        お支払いへ
      </Button>
    </div>
  );
}

export default OrderButton;
