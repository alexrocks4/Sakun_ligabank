import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import './assets/scss/style.scss';
import { configureStore } from '@reduxjs/toolkit';
import { api } from './store/apiSlice';
import { Provider } from 'react-redux';
import { historySlice } from './store/historySlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    history: historySlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
