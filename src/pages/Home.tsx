import { orderAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';

const Home = () => {

    const [order, setOrder] = useAtom(orderAtom);

    return(

    <div>
        <h1>Home</h1>
        <p>{order.state}</p>
    </div>
    )
};
  
  export default Home;
  