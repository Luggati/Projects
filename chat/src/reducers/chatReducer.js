
import {
    ADD_MESSAGE,
    RECEIVE_MESSAGE,
    ADD_USER,
    UPDATE_USERS_LIST,
  } from '../ActionTypes';
  
  const initialState = {
    messages: [],
    users: [],
  };
  
  function chatReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      case RECEIVE_MESSAGE:
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      case ADD_USER:
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case UPDATE_USERS_LIST:
        return {
          ...state,
          users: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default chatReducer;
  