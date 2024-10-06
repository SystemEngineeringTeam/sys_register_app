import React from 'react';
import CategoryAddPopupScreen from './CategoryAddPopupScreen';
import { Card } from '@mui/material';

const CategoryAddPopupCard = () => {
  return (
    <div>
      <Card sx={{ width: '70%', ml: '15%', mt: '5%', height: '60%' }}>
        <CategoryAddPopupScreen />
      </Card>
    </div>
  );
};

export default CategoryAddPopupCard;
