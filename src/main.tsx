import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import OrderChange from './pages/OrderChange.tsx';
import OrderMenuRight from './components/OrderMenuRight.tsx';

const root = document.getElementById('root');
if (root == null) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
   <OrderChange/>
  </React.StrictMode>,
);
