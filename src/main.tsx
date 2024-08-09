import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ProductOrderCard from './components/ProductOrderCard.tsx';

const root = document.getElementById('root');
if (root == null) throw new Error('Root element not found');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ProductOrderCard />
  </React.StrictMode>,
);
