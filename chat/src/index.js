// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import chatReducer from './reducers/chatReducer';
import rootSaga from './rootSaga'; 
import setupSocket from './setupSocket'; 
import generateUsername from './utils/name'; 


const username = generateUsername();


const sagaMiddleware = createSagaMiddleware();


const store = createStore(chatReducer, applyMiddleware(sagaMiddleware));


const socket = setupSocket(store, username);


sagaMiddleware.run(rootSaga, { socket, username });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
