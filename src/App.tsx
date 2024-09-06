import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Cooking from './pages/Cooking';
import Delivery from './pages/Delivery';
import Call from './pages/Call';
import Admin from './pages/Admin';
import Order from './pages/Order';
import Home from './pages/Home';
import { user_props } from './types';
import OrderChange from './pages/OrderChange';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/call" element={<Call />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/orderchange" element={<OrderChange />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
