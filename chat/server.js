
const WebSocket = require('ws');


const server = new WebSocket.Server({ port: 8080 });

let users = []; // List of users connected

// Log when the server is running
console.log('WebSocket server is running on ws://localhost:8080');

// Listen for new connections
server.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for messages from clients
  socket.on('message', (message) => {
    const data = JSON.parse(message);

    switch (data.type) {
      case 'ADD_USER':
        users.push(data.name);
        socket.username = data.name; // Store username in the socket object
        broadcast({
          type: 'UPDATE_USERS_LIST',
          users,
        });
        console.log(`User added: ${data.name}`);
        break;

      case 'ADD_MESSAGE':
        broadcast({
          type: 'ADD_MESSAGE',
          author: data.author,
          text: data.text,
        });
        console.log(`Message from ${data.author}: ${data.text}`);
        break;

      default:
        break;
    }
  });

  // Listen for disconnection
  socket.on('close', () => {
    users = users.filter((user) => user !== socket.username);
    broadcast({
      type: 'UPDATE_USERS_LIST',
      users,
    });
    console.log(`User disconnected: ${socket.username}`);
  });
});

// Function to broadcast messages to all connected clients
function broadcast(message) {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}
