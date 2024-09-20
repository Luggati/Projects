// src/setupSocket.js
import { ADD_USER, ADD_MESSAGE, UPDATE_USERS_LIST } from './ActionTypes'; // Ensure correct path
import { receiveMessage,  updateUsersList } from './actions/chatActions'; // Ensure correct path and adjust imports as needed

const setupSocket = (store, username) => {
  const socket = new WebSocket('ws://localhost:8080'); // Use the correct port

  // When the WebSocket connection is established
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

    // Handle incoming messages based on their type
    switch (data.type) {
      case ADD_MESSAGE:
        // Dispatch the messageReceived action to update Redux state
        store.dispatch(receiveMessage(data.text, data.author)); // Ensure payload structure matches your action creator
        break;

      case UPDATE_USERS_LIST:
        // Dispatch the populateUsersList action to update the users list
        store.dispatch(updateUsersList(data.users));
        break;

      default:
        break;
    }
  };

  // Error handling for WebSocket
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  return socket;
};

export default setupSocket;
