import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { store } from './store';
import { ApiSlice } from './src/Features/ApiSlice';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={ApiSlice}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
