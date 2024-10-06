import { Box } from '@mui/material';
import React from 'react';
import NumberButton from './NumberButton';

interface NumberButtonProps {
  ordersId: number[];
}

const NumberButtonBox = ({ ordersId }: NumberButtonProps) => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          wordBreak: 'break-word',
          flexWrap: 'wrap',
        }}
      >
        {ordersId.map((value) => {
          return <NumberButton orderId={value} ordersId={ordersId} />;
        })}
      </Box>
    </div>
  );
};

export default NumberButtonBox;
