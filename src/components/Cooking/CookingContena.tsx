import React from 'react';
import { Divider, Stack } from '@mui/material';
import ProductOrderContena from '../ProductOrderContena';

interface CookingContenaProps {
  cooking: number[];
}

const CookingContena: React.FC<CookingContenaProps> = ({ cooking }) => {
  return (
    <div>
      <Stack alignItems="center" divider={<Divider flexItem />} spacing={2}>
        {/* Dividerで区切り線を入れる */}
        {cooking.map((item, index) => (
          <ProductOrderContena key={index} id={item} />
        ))}
      </Stack>
    </div>
  );
};
export default CookingContena;
