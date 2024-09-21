// src/rootSaga.js
import { all } from 'redux-saga/effects';
import handleNewMessage from './sagas'; 


export default function* rootSaga(params) {
  yield all([
    handleNewMessage(params), 
  ]);
}
