const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.get('/', (req , res) => {
    res.sendFile(__dirname + '/index.html');
});
//socket connection
io.on('connection', (socket) => {
    console.log('connected');
    //listen 
    socket.on('chat message', (msg) => {
        //broadcast to all clients
        io.emit('chat message', msg);
    });

    //if disconnect
    socket.on('disconnect', () => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('Server running on localhost:3000');
});
