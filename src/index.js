// import the libraries
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import './App.css';
import  App from './App';
import { createStore } from 'redux';

const store = createStore(reducers);
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
