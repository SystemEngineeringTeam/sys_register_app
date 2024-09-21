import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface OrderButtonProps {
  id: string;
}

function OrderButton({id}:OrderButtonProps) {

  const handleClick = () => {
    // お支払い画面へ遷移
    // react-router-domのLinkコンポーネントを使って、リンクを設定
    // お支払い画面のパスは'/payment'とする
    // リンクをクリックしたときに、'/payment'に遷移する
    <Link to="/payment" />;
  };

  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        size="large"
        onClick={handleClick}
        sx={{
          background: '#F68B1F',
          py: '30px', 
          px: '50px',
        }}
      >
        お支払いへ
      </Button>
    </div>
  );
}

export default OrderButton;
