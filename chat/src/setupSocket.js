
import { ADD_USER, ADD_MESSAGE, UPDATE_USERS_LIST } from './ActionTypes'; 
import { receiveMessage,  updateUsersList } from './actions/chatActions'; 

const setupSocket = (store, username) => {
  const socket = new WebSocket('ws://localhost:8080'); 

  
  socket.onopen = () => {
    console.log('WebSocket connected');

    // Send the ADD_USER event to the server with the username
    socket.send(
      JSON.stringify({
        type: ADD_USER,
        name: username,
      })
    );
  };

  // When a message is received from the server
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('Message received from server:', data);

    
    switch (data.type) {
      case ADD_MESSAGE:
        
        if(data.author !== username){
          store.dispatch(receiveMessage(data.text, data.author));
        } 
        break;

      case UPDATE_USERS_LIST:
        
        store.dispatch(updateUsersList(data.users));
        break;

      default:
        break;
    }
  };

  
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return socket;
};

export default setupSocket;
