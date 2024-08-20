import { useAtom } from "jotai";
import { orderCollectionAtom } from "../firebase/FirebaseUtils";



const Home = () => {


  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

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
          {orderCollectionData.data?.map((orderCollection) => (
            <div key={orderCollection.id}>
              <h2>{orderCollection.id}</h2>
              <p>注文内容: {orderCollection.order.map((o)=>{
                console.log('order'+o)
                console.log('order.item.name:'+o.item.name)
                return o.item.name
              })}</p>
              <p>注文日時: {orderCollection.timestamp}</p>
              <p>会計状況: {orderCollection.accounting}</p>
              <p>調理状況: {orderCollection.cooking}</p>
              <p>提供状況: {orderCollection.offer}</p>
            </div>
          ))}
        </div>
      );


    default:
      return <p>Idle</p>;
  }
};



  return (
    <div>
      <h1>注文一覧</h1>
      {orderCollection()}
    </div>
  );
};

export default Home;
