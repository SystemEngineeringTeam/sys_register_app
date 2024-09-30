import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MoneyCount from './components/OrderPayments/MoneyCount/MoneyCount';
import OrderPayment from './components/OrderPayments/OrderPayment';
import AppLayout from './layout/AppLayout';
import { RequiredLogin } from './layout/RequiredLogin';
import LoginForm from './login/LoginForm';
import Admin from './pages/Admin';
import Call from './pages/Call';
import Cooking from './pages/Cooking';
import CustomizeChange from './pages/CustomizeChange';
import Delivery from './pages/Delivery';
import Hoge from './pages/Hoge';
import Home from './pages/Home';
import Order from './pages/Order';
import OrderChange from './pages/OrderChange';
import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<RequiredLogin />}>
            <Route path="order" element={<Order />} />
            <Route path="cooking" element={<Cooking />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="call" element={<Call />} />
            <Route path="admin" element={<Admin />} />
            <Route path="hoge" element={<Hoge />} />
            <Route path="orderchange" element={<OrderChange />} />
            <Route path="customizechange" element={<CustomizeChange />} />
            <Route path="payment" element={<OrderPayment />} />
            <Route path="paychange" element={<MoneyCount />} />
            <Route path="test" element={<Test />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
