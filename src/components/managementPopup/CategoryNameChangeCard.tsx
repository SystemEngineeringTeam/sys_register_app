import React from 'react';
import CategoryNameChangeScreen from './CategoryNameChangeScreen';
import { Card } from '@mui/material';

const CategoryNameChangeCard = () => {
  return (
    <div>
      <Card sx={{ width: '70%', ml: '15%', mt: '5%', height: '50%'}}>
        <CategoryNameChangeScreen />
      </Card>
    </div>
  );
};

export default CategoryNameChangeCard;
