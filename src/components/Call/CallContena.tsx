import React from 'react';
import { Box, Divider, Stack } from '@mui/material';
import ProductCallContena from './ProductCallContena';
import { type orderCollection } from '@/types';

interface CallContenaProps {
  data: orderCollection[] | undefined;
  call: number[];
}

const CallContena: React.FC<CallContenaProps> = ({ call, data }) => {
  return (
    <div>
      <Stack alignItems="center" divider={<Divider flexItem />} spacing={2}>
        {/* Dividerで区切り線を入れる */}
        {call.map((orderCollectionId) => (
          // orderCollectionIdは一意
          <Box key={orderCollectionId}>
            <ProductCallContena data={data} id={orderCollectionId} />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default CallContena;
