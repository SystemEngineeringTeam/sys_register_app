import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MoneyCount from './components/OrderPayments/MoneyCount/MoneyCount';
import OrderPayment from './components/OrderPayments/OrderPayment';
import CategoryAddPopupCard from './components/managementPopup/CategoryAddPopupCard';
import CategoryDeletePopupCard from './components/managementPopup/CategoryDeletePopupCard';
import CategoryNameAddCard from './components/managementPopup/CategoryNameAddCard';
import CategoryNameChangeCard from './components/managementPopup/CategoryNameChangeCard';
import PopupCard from './components/managementPopup/PopupCard';

import AppLayout from './layout/AppLayout';
import { RequiredLogin } from './layout/RequiredLogin';
import LoginForm from './login/LoginForm';
import Admin from './pages/Admin';
import Call from './pages/Call';
import CategoryEdit from './pages/CategoryEdit';
import Cooking from './pages/Cooking';
import CustomizeChange from './pages/CustomizeChange';
import Delivery from './pages/Delivery';
import Hoge from './pages/Hoge';
import Home from './pages/Home';
import Order from './pages/Order';
import OrderChange from './pages/OrderChange';
import CategoryDaialog from './components/managementPopup/CategoryDaialog';
import Test from './pages/Test';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<Home />} index />
          <Route element={<LoginForm />} path="/login" />
          <Route element={<RequiredLogin />} path="/*">
            <Route element={<Order />} path="order" />
            <Route element={<Cooking />} path="cooking" />
            <Route element={<Delivery />} path="delivery" />
            <Route element={<Call />} path="call" />
            <Route element={<Admin />} path="admin" />
            <Route element={<Hoge />} path="hoge" />
            <Route element={<OrderChange />} path="orderchange" />
            <Route element={<CustomizeChange />} path="customizechange" />
            <Route element={<OrderPayment />} path="payment" />
            <Route element={<MoneyCount />} path="paychange" />
            <Route element={<Test />} path="test" />
             <Route path="popup" element={<CategoryDaialog />} />
            <Route path="popupcategorydelete" element={<CategoryDeletePopupCard />} />
            <Route path="popupcategoryadd" element={<CategoryAddPopupCard />} />
            <Route path="popupcategorychangename" element={<CategoryNameChangeCard />} />
            <Route path="categorynameadd" element={<CategoryNameAddCard />} />
            <Route path="categoryedit" element={<CategoryEdit />} />
            <Route element={<div>Not Found</div>} path="*" />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
