import { type ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { useMoney } from '../firebase/useMoney';
import { userAtom } from '@/login/AdminLogin';
import { useAtomValue } from 'jotai';

export default function Page(): ReactElement {
  const user = useAtomValue(userAtom);

  if (!user) {
    throw new Error('User is not logged in');
  }

  const { data } = useOrderCollection(user);
  const { money } = useMoney(user);
  return (
    <div>
      DATA:{JSON.stringify(data)}
      <br />
      MONEY:{JSON.stringify(money)}
    </div>
  );
}
