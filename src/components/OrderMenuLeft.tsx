import React from 'react'
import OrderMenueContena from '../components/OrderMenueContena';
import OrderMenueCustomize from '../components/OrderMenueCustomize';
import OrderMenueName from '../components/OrderMenueName';
import { Box, Grid, Stack } from '@mui/material';


  

function OrderMenuLeft() {
    const ordernames = [
        { name: '塩', price: 300 },
        { name: 'たれ', price: 300 },
        { name: 'ねぎま', price: 300 },
        { name: 'もも', price: 300 },
        { name: 'コーラ', price: 100 },
        { name: 'ファンタグレープ', price: 100 },
      ];
  return (
    <div>
       <Box>
          <Box>
            {ordernames.map((order) => (
              <OrderMenueContena ordername={order.name} orderprice={order.price} />
            ))}
          </Box>
        </Box>
    </div>
  )
}

export default OrderMenuLeft
