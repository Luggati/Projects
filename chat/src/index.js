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
import rootSaga from './rootSaga'; // Import your root saga
import setupSocket from './setupSocket'; // WebSocket setup function
import generateUsername from './utils/name'; // Function to generate a random username

// Generate a unique username using Chance.js
const username = generateUsername();

// Create a Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store and apply the saga middleware
const store = createStore(chatReducer, applyMiddleware(sagaMiddleware));

// Set up the WebSocket connection and pass the store and username
const socket = setupSocket(store, username);

// Run the root saga with the WebSocket and username as parameters
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
