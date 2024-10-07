import { type ReactElement } from 'react';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import { processOrderCollection } from '../utils/processOrderCollection';

export default function Order(): ReactElement {
  const process = 'accounting';
  const orderData = processOrderCollection(process);

  const ordersId = orderData.map((order) => Number(order.id));

  return (
    <div>
      <NumberButtonBox ordersId={ordersId} />
      <OrderWaitPeople ordersId={ordersId} />
    </div>
  );
}
