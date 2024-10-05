import React from 'react';
import CategoryDeletePopupScreen from './CategoryDeletePopupScreen';
import { Card } from '@mui/material';

const CategoryDeletePopupCard = () => {
  return (
    <div>
      <Card sx={{ width:'70%' , ml:'15%' , mt:'5%' , height:'60%'}}>
        <CategoryDeletePopupScreen />
      </Card>
    </div>
  );
};

export default CategoryDeletePopupCard;
