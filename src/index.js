import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
// import store from './data/store';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

ReactDOM.render(
    <Provider>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
    );
registerServiceWorker();
