// src/sagas.js
import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from './ActionTypes';

// The saga function that handles sending new messages through the WebSocket
function* handleNewMessage(params) {
  // Listen for every ADD_MESSAGE action and handle it
  yield takeEvery(ADD_MESSAGE, function* (action) {
    // Set the author to the username from params and send the message via WebSocket
    const message = {
      ...action.payload, // Ensure we're sending only the payload content
      author: params.username, // Set the author to the current user's username
    };
    params.socket.send(JSON.stringify({ type:ADD_MESSAGE, ...message }));
  });
}

export default handleNewMessage;
