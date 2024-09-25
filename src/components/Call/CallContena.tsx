import React from 'react';
import { Divider, Stack } from '@mui/material';
import ProductCallContena from './ProductCallContena';

interface CallContenaProps {
  call: number[];
}

const CallContena: React.FC<CallContenaProps> = ({ call }) => {
  return (
    <div>
      <Stack spacing={2} alignItems="center" divider={<Divider flexItem />}>
        {/* Dividerで区切り線を入れる */}
        {call.map((item, index) => (
          <ProductCallContena key={index} id={item}  />
        ))}
      </Stack>
    </div>
  );
};

export default CallContena;