// src/actions/chatActions.js
import { ADD_MESSAGE, ADD_USER, RECEIVE_MESSAGE, UPDATE_USERS_LIST } from '../ActionTypes';

// Action creator for receiving a message
export const receiveMessage = (text, author) => ({
  type: RECEIVE_MESSAGE,
  payload: { text, author },
});

// Action creator for populating the users list
export const updateUsersList = (users) => ({
  type: UPDATE_USERS_LIST,
  payload: users,
});

// Action creator for adding a message (optional, adjust based on your needs)
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

// Action creator for adding a user
export const addUser = (name) => ({
  type: ADD_USER,
  payload: name,
});
