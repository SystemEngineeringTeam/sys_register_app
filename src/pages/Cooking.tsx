import React from 'react';
import { Divider, Stack } from '@mui/material';

import ProductOrderContena from '../components/ProductOrderContena';
import CookingContena from '../components/Cooking/CookingContena';
import { processOrderCollection } from '../utils/processOrderCollection';

const Cooking: React.FC = () => {

  const process = "cooking";
  const cooking = processOrderCollection(process);

  const cookings = cooking.map((cooking) => Number(cooking.id));

  return (
    <div>
      <CookingContena cooking={cookings} />
    </div>
  );
};

export default Cooking;
