import { deleteOrder } from '@/firebase/useOrder';
import { Button } from '@mui/material';
import React from 'react';

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
          deleteOrder();
        }}
        size="medium"
        sx={{
          background: '#FF4337',
          width: '200px',
          py: '30px',
        }}
        variant="contained"
      >
        注文取消
      </Button>
    </div>
  );
};

export default OrderDelete;
