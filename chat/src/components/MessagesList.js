
import React from 'react';
import { connect } from 'react-redux';

// displays its author and text
const Message = ({ message }) => (
  <div>
    <strong>{message.author}:</strong> {message.text}
  </div>
);

const MessagesList = ({ messages }) => (
  <div>
    {messages.map((msg, index) => (
      <Message key={index} message={msg} /> 
    ))}
  </div>
);


const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessagesList);
