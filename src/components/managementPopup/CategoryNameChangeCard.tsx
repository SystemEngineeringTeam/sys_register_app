import React from 'react';
import CategoryNameChangeScreen from './CategoryNameChangeScreen';
import { Card } from '@mui/material';

interface CategoryNameAddCard{
  iconClose: () => void;
  orderName: string;
}

const CategoryNameChangeCard = ({iconClose, orderName}:CategoryNameAddCard) => {
  return (
    <div>
      <Card sx={{}}>
        <CategoryNameChangeScreen iconClose={iconClose} orderName={orderName}/>
      </Card>
    </div>
  );
};

export default CategoryNameChangeCard;
