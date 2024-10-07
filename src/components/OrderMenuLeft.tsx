import { order } from '@/types';
import { Box } from '@mui/material';
import OrderMenueContena from './OrderMenueContena';
import { useState } from 'react';

interface OrderMenueLeftProps {
  selectId: number;
  orderData: order[];
  setNewOrderData: React.Dispatch<React.SetStateAction<order[]>>;
  newOrderData: order[];
}

const OrderMenuLeft = ({ selectId, orderData, setNewOrderData, newOrderData }: OrderMenueLeftProps) => {
  return (
    <div>
      <Box>
        <Box>
          {orderData.map((order: order, index) => {
            return (
              <OrderMenueContena
                key={index} // keyを追加することで一意の要素とする
                index={index}
                selectMenuName={order.item.name}
                selectMenuPrice={order.item.price}
                selectMenuImg={order.item.imgUrl}
                selectMenuqty={order.qty}
                selectOptions={order.options}
                selectMenuId={order.item.id}
                selectId={selectId.toString()}
                setNewOrderData={setNewOrderData}
                selectOrder={order}
                newOrderData={newOrderData}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
