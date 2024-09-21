
import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from './ActionTypes';


function* handleNewMessage(params) {
  // Listen for every ADD_MESSAGE action 
  yield takeEvery(ADD_MESSAGE, function* (action) {
    
    const message = {
      ...action.payload,
      author: params.username, // Set the author to the current user's username
    };
    params.socket.send(JSON.stringify({ type:ADD_MESSAGE, ...message }));
  });
}

export default handleNewMessage;
