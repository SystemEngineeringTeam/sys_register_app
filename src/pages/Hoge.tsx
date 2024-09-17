import { ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';

export default function Page(): ReactElement {
  const { data } = useOrderCollection();
  return <div>{JSON.stringify(data)}</div>;
}
