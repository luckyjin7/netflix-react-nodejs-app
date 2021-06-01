import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from './store/reducers/rootReducer';
import promise from 'redux-promise';

import App from './App';
import './static/sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const app = (
  <Provider store = {createStoreWithMiddleware(rootReducer)}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app,document.getElementById('root'));
