import { ADD_MESSAGE, RECEIVE_MESSAGE, ADD_USER, UPDATE_USERS_LIST } from '../ActionTypes';

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: {
    author: 'Me', 
    text: message,
  },
});


export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
});


export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});


export const updateUsersList = (users) => ({
  type: UPDATE_USERS_LIST,
  payload: users,
});
