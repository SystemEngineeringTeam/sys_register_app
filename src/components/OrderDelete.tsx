import { deleteOrder } from '@/firebase/useOrder';
import { userAtom } from '@/login/AdminLogin';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React from 'react';
import { order, orderCollection } from '../types/index';

const OrderDelete = () => {
  const user = useAtomValue(userAtom);
  if (user == null) {
    throw new Error('User is not logged in');
  }

  return (
    <div>
      <Button
        disableElevation
        onClick={() => {
          // deleteOrder( orderCollection.id, orderId ,user);
        }}
        size="medium"
        sx={{
          background: '#FF4337',
          width: '200px',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '2rem' },
        }}
        variant="contained"
        
      >
        注文取消
      </Button>
    </div>
  );
};

export default OrderDelete;
