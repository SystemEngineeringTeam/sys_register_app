import React from 'react';
import OrderNumber from './OrderNumber';
import CollectedMoneyPaid from './CollectedMoneyPaid';


const OrderPayment = () => {
  return (
    <div>
      <OrderNumber/>
      <CollectedMoneyPaid />
    </div>
  );
};

export default OrderPayment;
