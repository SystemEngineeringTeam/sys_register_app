import React from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';


const Order = ( ) => {
    const orders = [1,2,3,4,4,5,4,231,3245,324,332,344];
  return (
    <div>
      <NumberButtonBox orders={orders}/>
      <OrderWaitPeople orders={orders}/>
    </div>
    
    )}
export default Order;