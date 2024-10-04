import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cooking from './pages/Cooking';
import Delivery from './pages/Delivery';
import Call from './pages/Call';
import Admin from './pages/Admin';
import Order from './pages/Order';
import Hoge from './pages/Hoge';
import LoginForm from './login/LoginForm';
import AppLayout from './layout/AppLayout';
import { RequiredLogin } from './layout/RequiredLogin';
import Home from './pages/Home';
import { user_props } from './types';
import OrderChange from './pages/OrderChange';
import CustomizeChange from './pages/CustomizeChange';
import OrderPayment from './components/OrderPayments/OrderPayment';
import MoneyCount from './components/OrderPayments/MoneyCount/MoneyCount';
import PopupScreen from './components/managementPopup/PopupScreen';
import PopupCard from './components/managementPopup/PopupCard';
import CategoryDeletePopupCard from './components/managementPopup/CategoryDeletePopupCard';
import CategoryAddPopupCard from './components/managementPopup/CategoryAddPopupCard';
import CategoryNameChangeScreen from './components/managementPopup/CategoryNameChangeScreen';
import CategoryNameChangeCard from './components/managementPopup/CategoryNameChangeCard';
import CategoryNameAddScreen from './components/managementPopup/CategoryNameAddScreen';
import CategoryNameAddCard from './components/managementPopup/CategoryNameAddCard';
import CategoryEdit from './pages/CategoryEdit';

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
            <Route path="popup" element={<PopupCard />} />
            <Route path="popupcategorydelete" element={<CategoryDeletePopupCard />} />
            <Route path="popupcategoryadd" element={<CategoryAddPopupCard />} />
            <Route path="popupcategorychangename" element={<CategoryNameChangeCard />} />
            <Route path="categorynameadd" element={<CategoryNameAddCard />} />
            <Route path="categoryedit" element={<CategoryEdit />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
