import { Button } from '@mui/material';
import React from 'react';

const OkeyButton = () => {
  return (
    <div>
      <Button
        disableElevation
        onClick={() => {
          console.log('お支払いへ');
        }}
        size="large"
        sx={{
          background: '#F68B1F',
          py: '30px', // 必要に応じてパディングを調整
          width: '200px',
        }}
        variant="contained"
      >
        決定
      </Button>
    </div>
  );
};

export default OkeyButton;
