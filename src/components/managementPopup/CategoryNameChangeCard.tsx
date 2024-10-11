import React from 'react';
import CategoryNameChangeScreen from './CategoryNameChangeScreen';
import { Card } from '@mui/material';

interface CategoryNameAddCard {
  iconClose: () => void;
  orderName: string;
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryNameChangeCard = ({ iconClose, orderName, categoryName, setCategoryName }: CategoryNameAddCard) => {
  return (
    <div>
      <Card sx={{}}>
        <CategoryNameChangeScreen
          iconClose={iconClose}
          orderName={orderName}
          setCategoryName={setCategoryName}
          categoryName={categoryName}
        />
      </Card>
    </div>
  );
};

export default CategoryNameChangeCard;
