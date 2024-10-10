import { Button } from '@mui/material';
import React from 'react';

const OrderDelete = () => {
  return (
    <div>
      <Button
        disableElevation
        onClick={() => {}}
        size="medium"
        sx={{
          background: '#FF4337',
          width: '200px',
          py: '30px',
        }}
        variant="contained"
      >
        注文取消
      </Button>
    </div>
  );
};

export default OrderDelete;
