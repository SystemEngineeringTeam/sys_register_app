import { useAtom } from 'jotai';
import { money, order, orderCollection } from '../types/index';
import { moneyAtom, orderCollectionAtom } from '../firebase/FirebaseUtils';
import { userAtomLoadable } from '../login/AdminLogin';

const Home = () => {
  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);
  const [moneyData, setMoneyData] = useAtom(moneyAtom);
  const [user] = useAtom(userAtomLoadable); // user を分解

  const uid = user.state === 'hasData' ? user.data?.uid : null;
  console.log('UID' + uid);

  const money = moneyData.state === 'hasData' ? moneyData.data : null;

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

            <h1>お金</h1>
            {money?.map(
              (money: money) => (
                console.log('money.date:' + money.date),
                console.log('1円:' + money['1']),
                console.log('5円:' + money['5']),
                console.log('10円:' + money['10']),
                console.log('50円:' + money['50']),
                console.log('100円:' + money['100']),
                console.log('500円:' + money['500']),
                console.log('1000円:' + money['1000']),
                console.log('5000円:' + money['5000']),
                console.log('10000円:' + money['10000']),
                (
                  <div key={money.date}>
                    <p>{'1円' + money['1']}</p>
                    <p>{'5円' + money['5']}</p>
                    <p>{'10円' + money['10']}</p>
                    <p>{'50円' + money['50']}</p>
                    <p>{'100円' + money['100']}</p>
                    <p>{'500円' + money['500']}</p>
                    <p>{'1000円' + money['1000']}</p>
                    <p>{'5000円' + money['5000']}</p>
                    <p>{'10000円' + money['10000']}</p>
                  </div>
                )
              ),
            )}

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
