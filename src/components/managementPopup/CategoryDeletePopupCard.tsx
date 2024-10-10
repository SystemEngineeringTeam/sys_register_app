import React from 'react';
import CategoryDeletePopupScreen from './CategoryDeletePopupScreen';
import { Card } from '@mui/material';
import { category, order } from '@/types';

interface PopupCardProps {
  iconClose: () => void;
  categoryName: string;
  categoryId:string;
}

const CategoryDeletePopupCard = ({iconClose, categoryName , categoryId}:PopupCardProps) => {

  return (
    <div>
      <Card >
        <CategoryDeletePopupScreen iconClose={iconClose} categoryName={categoryName} categoryId={categoryId} />
      </Card>
    </div>
  );
};

export default CategoryDeletePopupCard;
