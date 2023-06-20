import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './Store';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(

  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);