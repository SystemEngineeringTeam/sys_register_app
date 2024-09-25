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
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
