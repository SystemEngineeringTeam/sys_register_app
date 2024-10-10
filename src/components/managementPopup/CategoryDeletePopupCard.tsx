import React from 'react';
import CategoryDeletePopupScreen from './CategoryDeletePopupScreen';
import { Card } from '@mui/material';
import { category, order } from '@/types';

interface PopupCardProps {
  iconClose: () => void;
  orderName: string;
  orderId:string;
  order: string;
}

const CategoryDeletePopupCard = ({iconClose, orderName , orderId , order}:PopupCardProps) => {
  console.log("2 order", order)
console.log("iconClose", iconClose);

  return (
    <div>
      <Card >
        <CategoryDeletePopupScreen iconClose={iconClose} orderName={orderName} orderId={orderId} order={order}/>
      </Card>
    </div>
  );
};

export default CategoryDeletePopupCard;
