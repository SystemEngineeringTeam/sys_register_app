import { deleteOrder } from '@/firebase/useOrder';
import { userAtom } from '@/login/AdminLogin';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React from 'react';
import { order, orderCollection } from '../types/index';
import { Link } from 'react-router-dom';

interface OrderDeleteProp{
  selectectOrderId:string;
  selectColectionOrder:string;
  orderData: order[];
  selectId:string;
}

const OrderDelete = ({selectectOrderId,selectColectionOrder , orderData , selectId}:OrderDeleteProp) => {
  const user = useAtomValue(userAtom);
  if (user == null) {
    throw new Error('User is not logged in');
  }

    const ClickOrderDelete = () => {
      deleteOrder(selectId,selectectOrderId,user);
      console.log("selectectOrderId",selectectOrderId);
      console.log("selectColectionOrder",selectColectionOrder);
      console.log("sekec")
      console.log("orderData",orderData)
      alert("カスタマイズのすべてのデータを消去します。本当に消去しますか？")
    }

  return (
    <div>
      <Button
        disableElevation
        onClick={ClickOrderDelete
        }
        component={Link}
        to="/order"
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
