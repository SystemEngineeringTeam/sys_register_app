import { Button } from '@mui/material';
import React from 'react';

function OrderDelete() {
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
          background: '#FF4337', 
          width: '30%',
          py: '30px',
         
        }}
      >
        注文取消
      </Button>
    </div>
  );
}

export default OrderDelete;
