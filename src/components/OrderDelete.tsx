import { deleteCategory } from '@/firebase/useCategory';
import { deleteOrderCollection } from '@/firebase/useOrderCollection';
import { userAtom } from '@/login/AdminLogin';
import { order } from '@/types';
import { Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

interface OrderDelete {
  id:string;
  selectId: number;
  selectMenuId: string;
  selectOrderItemId: string;
  selectOrderItemCategoryId: string;
  orderData:order[];
}

const OrderDelete = ({id , selectId , selectMenuId, selectOrderItemId , selectOrderItemCategoryId , orderData}:OrderDelete) => {
console.log("🚀 ~ OrderDelete ~ selectMenuId:", selectMenuId)
console.log("🚀 ~ OrderDelete ~ selectOrderItemCategoryId:", selectOrderItemCategoryId)
console.log("🚀 ~ OrderDelete ~ selectOrderItemId:", selectOrderItemId)

  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }


 // newOrderData={state.newOrderData} selectId={state.selectId} selectMenuId={state.selectOrder.item.id} selectOrderItemId={state.selectOrder.id} selectOrderItemCategoryId={state.selectOrder.item.category_id} orderData={orderData}


// category_id
// : 
// "Ci0P7LiZfSXZTAtbycQE"
// id
// : 
// "XHRHflP51o4uZmygg07Y"

console.log("🚀 ~ orderData:", orderData)

  const ClickIdDelete = () => {
    deleteOrderCollection(id,user);
    alert("本当に消しますか？")
  }
//    console.log("🚀 ~ ClickIdDelete ~ id:", id)

  const ClickCategoryDelete = () => {
    console.log("🚀 ~ orderData:", orderData);
    deleteCategory(selectMenuId,user);
    alert("本当に消しますか？")
    console.log("🚀 ~ ClickIdDelete ~ id:", selectMenuId)
  }
  
  const ClickOrderDelete = () => {
    deleteCategory(selectOrderItemId,user);
    console.log("🚀 ~ orderData:", orderData);
    console.log("🚀 ~ ClickOrderItemDelete ~ selectOrderItemCategoryId:", selectOrderItemId)
    alert("本当に消しますか？")
  }

  const ClickOrderItemDelete = () => {
    deleteCategory(selectOrderItemCategoryId,user);
    alert("本当に消しますか？")
    console.log("🚀 ~ orderData:", orderData);
    console.log("🚀 ~ ClickOrderItemDelete ~ selectOrderItemCategoryId:", selectOrderItemCategoryId)
  }
   


  // <Link state={{ orderId }} to="/orderchange">
  //       <DisplayNumber orderId={orderId} />
  //     </Link>
  

  return (
    <div>
      <Button
        disableElevation
        onClick={ ClickIdDelete }
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
