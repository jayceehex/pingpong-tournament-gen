import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import store from './store';
import './styles/css/App.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
    );
registerServiceWorker();
