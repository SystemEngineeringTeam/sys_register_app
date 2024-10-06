import { type ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { useMoney } from '../firebase/useMoney';

export default function Page(): ReactElement {
  const { data } = useOrderCollection();
  const { money } = useMoney();
  return (
    <div>
      DATA:{JSON.stringify(data)}
      <br />
      MONEY:{JSON.stringify(money)}
    </div>
  );
}
