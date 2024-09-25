import { ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { money } from '../types/index';
import { useMoney } from '../firebase/useMoney';

export default function Page(): ReactElement {
  const { data } = useOrderCollection();
  const { money} = useMoney();
  return <div>DATA:{JSON.stringify(data)}
  <br/>
  MONEY:{JSON.stringify(money)}
  </div>;
}
