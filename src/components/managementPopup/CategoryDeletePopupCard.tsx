import React from 'react';
import CategoryDeletePopupScreen from './CategoryDeletePopupScreen';
import { Card } from '@mui/material';

interface PopupCardProps {
  iconClose: () => void;
  orderName: string;
}

const CategoryDeletePopupCard = ({iconClose, orderName}:PopupCardProps) => {
  return (
    <div>
      <Card >
        <CategoryDeletePopupScreen iconClose={iconClose} orderName={orderName}/>
      </Card>
    </div>
  );
};

export default CategoryDeletePopupCard;
