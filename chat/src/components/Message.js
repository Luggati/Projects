
import React from 'react';

const Message = ({ message }) => (
  <div>
    <strong>{message.author}</strong>: {message.text}
  </div>
);

export default Message;
