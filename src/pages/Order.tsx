import { type ReactElement } from 'react';
import NumberButtonBox from '@/components/NumberButtonBox';
import OrderWaitPeople from '@/components/OrderWaitPeople';
import { processOrderCollection } from '@/utils/processOrderCollection';
import { useLocation } from 'react-router-dom';
import { type money } from '@/types';
import { updateMoney } from '@/firebase/useMoney';
import { userAtom } from '@/login/AdminLogin';
import { useAtomValue } from 'jotai';
// eslint-disable-next-line react/function-component-definition
export default function Order(): ReactElement {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }
  // 会計後、レジのお金を正しい値にするためのstate
  interface State {
    newMoney?: money;
  }
  const location = useLocation();
  const { state } = location as { state: State };
  if (state?.newMoney !== undefined) {
    void updateMoney(state.newMoney, user);
    state.newMoney = undefined;
  }
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
