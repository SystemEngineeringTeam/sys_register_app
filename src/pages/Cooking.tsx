import React from 'react';
import { Divider, Stack } from '@mui/material';
import ProductOrderContena from '../components/ProductOrderContena';
import CookingContena from '../components/Cooking/CookingContena';

const Cooking: React.FC = () => {
  const cooking = [1, 2, 3, 5, 4, 231, 325, 324, 332, 344, 223, 421, 324, 321, 123, 242];

  return (
    <div>
      <CookingContena cooking={cooking} />
    </div>
  );
};

export default Cooking;
