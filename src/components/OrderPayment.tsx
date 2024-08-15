import React from 'react';
import OrderNumber from './OrderNumber';
import MoneyPaid from './MoneyPaid';

const OrderPayment = () => {
  return (
    <div>
      <OrderNumber />
      <MoneyPaid image="/money_1.svg" />
      <MoneyPaid image="/money_5.svg" />
      <MoneyPaid image="/money_10.svg" />
      <MoneyPaid image="/money_50.svg" />
      <MoneyPaid image="/money_100.svg" />
      <MoneyPaid image="/money_500.svg" />
      <MoneyPaid image="/money_1000.svg" />
      <MoneyPaid image="/money_5000.svg" />
      <MoneyPaid image="/money_10000.svg" />
    </div>
  );
};

export default OrderPayment;
