import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface OrderButtonProps {
  id: string;
}

const OrderButton = ({ id }: OrderButtonProps) => {
  const handleClick = () => {
    // お支払い画面へ遷移
    // react-router-domのLinkコンポーネントを使って、リンクを設定
    // お支払い画面のパスは'/payment'とする
    // リンクをクリックしたときに、'/payment'に遷移する
    console.log('~ OrderButton ~ handleClick ~ id:', id);
  };
  ``;
  return (
    <div>
      <Link state={{ id }} to="/payment">
        <Button
          disableElevation

          sx={{
            background: '#F68B1F',
 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2rem' },
          }}
          variant="contained"
        >
          お支払いへ
        </Button>
      </Link>
    </div>
  );
};

export default OrderButton;
