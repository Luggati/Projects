// src/rootSaga.js
import { all } from 'redux-saga/effects';
import handleNewMessage from './sagas'; // Make sure this path points to your sagas.js

// Main root saga where all individual sagas are combined
export default function* rootSaga(params) {
  yield all([
    handleNewMessage(params), // Pass the params which include the WebSocket and username
  ]);
}
