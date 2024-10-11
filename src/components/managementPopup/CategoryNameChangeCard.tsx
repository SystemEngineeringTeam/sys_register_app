import React from 'react';
import CategoryNameChangeScreen from './CategoryNameChangeScreen';
import { Card } from '@mui/material';
import { category } from '@/types';

interface CategoryNameAddCard {
  iconClose: () => void;
  categoryName: string;
  categoryId: string;
  categorydata: category;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryNameChangeCard = ({
  iconClose,
  categoryName,
  categoryId,
  categorydata,
  setCategoryName,
}: CategoryNameAddCard) => {
  return (
    <div>
      <Card sx={{}}>
        <CategoryNameChangeScreen
          iconClose={iconClose}
          categoryName={categoryName}
          categoryId={categoryId}
          categorydata={categorydata}
          setCategoryName={setCategoryName}
        />
      </Card>
    </div>
  );
};

export default CategoryNameChangeCard;
