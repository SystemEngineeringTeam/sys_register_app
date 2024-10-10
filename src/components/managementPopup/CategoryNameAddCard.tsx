import { Card } from '@mui/material';
import React from 'react';
import CategoryNameAddScreen from './CategoryNameAddScreen';

interface CategoryNameAddCard{
  iconClose: () => void;
}

const CategoryNameAddCard = ({iconClose}:CategoryNameAddCard) => {
  return (
    <div>
      <Card>
        <CategoryNameAddScreen iconClose={iconClose}/>
      </Card>
    </div>
  );
};

export default CategoryNameAddCard;
