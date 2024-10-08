import React from 'react';
import CategoryNameChangeScreen from './CategoryNameChangeScreen';
import { Card } from '@mui/material';

interface CategoryNameAddCard{
  iconClose: () => void;
}

const CategoryNameChangeCard = ({iconClose}:CategoryNameAddCard) => {
  return (
    <div>
      <Card sx={{}}>
        <CategoryNameChangeScreen iconClose={iconClose}/>
      </Card>
    </div>
  );
};

export default CategoryNameChangeCard;
