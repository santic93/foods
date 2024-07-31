import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './MealsApp.jsx';
import { Layout } from './ui/Layout.jsx';
import '../index.css';
import { BrowserRouter } from 'react-router-dom';
import './i18n.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className='main-content'>
        <Layout>
          <App />
        </Layout>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
