// src/components/MessagesList.js
import React from 'react';
import { connect } from 'react-redux';

// The Message component receives a message prop and displays its author and text
const Message = ({ message }) => (
  <div>
    <strong>{message.author}:</strong> {message.text}
  </div>
);

const MessagesList = ({ messages }) => (
  <div>
    {messages.map((msg, index) => (
      <Message key={index} message={msg} /> // Pass the message object to the Message component
    ))}
  </div>
);

// Map state to props to get the list of messages from the Redux store
const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessagesList);
