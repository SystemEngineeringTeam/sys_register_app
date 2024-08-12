import { or } from 'firebase/firestore';
import { orderAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';

const Home = () => {
  const [order, setOrder] = useAtom(orderAtom);

  console.log(order);


  return (
    <div>
      <h1>注文情報</h1>
      <p>注文情報ページです</p>
      <div>
        {order.state === 'loading' && <p>Loading...</p>}
        {order.state === 'hasError' && <p>Error</p>}

        {order.state === 'hasData' &&
          order.data?.map((o) => (

            <div key={o.id}>
              <p>id:{o.id}</p>
              <p>itemID:{o.items_id}</p>
              <p>時間：{o.timestamp}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
