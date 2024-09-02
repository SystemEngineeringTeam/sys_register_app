import { useAtom } from 'jotai';
import { order, orderCollection } from '../types/index';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { userAtomLoadable } from '../login/AdminLogin';

const Home = () => {
  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);
  const [user] = useAtom(userAtomLoadable); // user を分解

  const uid = user.state === 'hasData' ? user.data?.uid : null;
  console.log('UID' + uid);

  console.log(orderCollectionData);

  function orderCollection() {
    switch (orderCollectionData.state) {
      case 'loading':
        return <p>Loading...</p>;

      case 'hasError':
        return <p>Error</p>;

      case 'hasData':
        return (
          <div>
            <h1>ユーザー:{uid}</h1>

            {orderCollectionData.data?.map(
              (orderCollection: orderCollection) => (
                console.log('orderCollection.id:' + orderCollection.id),
                console.log('orderCollection.order:' + orderCollection.order),
                console.log('orderCollection.timestamp:' + orderCollection.timestamp),
                console.log('orderCollection.accounting:' + orderCollection.accounting),
                console.log('orderCollection.cooking:' + orderCollection.cooking),
                console.log('orderCollection.offer:' + orderCollection.offer),
                (
                  <div key={orderCollection.id}>
                    <h2>{orderCollection.id}</h2>
                    <p>
                      注文内容:{' '}
                      {orderCollection.order.map((o) => {
                        console.log('order' + o.id);
                        console.log('order.item.name:' + o.item.name);

                        const opt = o.options.map((option) => {
                          console.log('opt:' + option);
                          console.log('optName:' + option.name);
                          console.log('optionPrice:' + option.price);
                          return (
                            <div>
                              <p>{'optName' + option.name}</p>
                              <p>{'optPrice' + option.price}</p>
                            </div>
                          );
                        });
                        return (
                          <div>
                            <p>{'qty:' + o.qty}</p>
                            <p>{'itemName' + o.item.name}</p>
                            <p>{'itemPrice' + o.item.price}</p>
                            {opt}
                          </div>
                        );
                      })}
                    </p>
                    <p>注文日時: {orderCollection.timestamp}</p>
                    <p>会計状況: {orderCollection.accounting}</p>
                    <p>調理状況: {orderCollection.cooking}</p>
                    <p>提供状況: {orderCollection.offer}</p>
                  </div>
                )
              ),
            )}
          </div>
        );

      default:
        return <p>Idle</p>;
    }
  }

  return (
    <div>
      <h1>注文一覧</h1>
      {orderCollection()}
    </div>
  );
};

export default Home;
