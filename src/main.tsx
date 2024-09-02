import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import AdminLogin from './login/AdminLogin.tsx';
import OrderChange from './pages/OrderChange.tsx';
import OrderMenuRight from './components/OrderMenuRight.tsx';
import CustomizeChange from './pages/CustomizeChange.tsx';

const root = document.getElementById('root');
if (root == null) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AdminLogin />
  </React.StrictMode>,
);
