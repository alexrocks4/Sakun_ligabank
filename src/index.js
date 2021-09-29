import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import './assets/scss/style.scss';
import { appStore } from './store/store';
import { loadHistoryItems } from './store/historySlice';

// Load history items from localStorage to Redux
appStore.dispatch(loadHistoryItems());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
