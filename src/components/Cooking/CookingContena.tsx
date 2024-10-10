import React from 'react';
import { Box, Divider, Stack } from '@mui/material';
import ProductOrderContena from '@/components/ProductOrderContena';

interface CookingContenaProps {
  cooking: number[];
}

const CookingContena: React.FC<CookingContenaProps> = ({ cooking }) => {
  return (
    <div>
      <Stack alignItems="center" divider={<Divider flexItem />} spacing={2}>
        {/* Dividerで区切り線を入れる */}
        {/* ここのcookingは注文番号の配列 = orderCollectionのid */}
        {cooking.map((orderCollectionId) => (
          <Box key={orderCollectionId}>
            <ProductOrderContena id={orderCollectionId} />
          </Box>
        ))}
      </Stack>
    </div>
  );
};
export default CookingContena;
