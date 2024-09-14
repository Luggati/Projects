var socket = io(); // Initialize socket.io connection

// Get references to form, input, and messages container
var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

// When the form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value); // Emit the message to the server
        input.value = ''; // Clear the input
    }
});

// Listen for incoming messages from the server
socket.on('chat message', function(data) {
    
    var item = document.createElement('p');
    item.textContent = `${data.time}: ${data.message}`; // Display the time and message
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the latest message
});
