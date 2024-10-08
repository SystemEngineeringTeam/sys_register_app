import React from 'react';
import CategoryDeletePopupScreen from './CategoryDeletePopupScreen';
import { Card } from '@mui/material';

interface PopupCardProps {
  iconClose: () => void;
}

const CategoryDeletePopupCard = ({iconClose}:PopupCardProps) => {
  return (
    <div>
      <Card >
        <CategoryDeletePopupScreen iconClose={iconClose}/>
      </Card>
    </div>
  );
};

export default CategoryDeletePopupCard;
