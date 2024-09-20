// src/components/AddMessage.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chatActions';

const AddMessage = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      addMessage(message);
      setMessage('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

// Connect AddMessage to Redux store to dispatch addMessage action
export default connect(null, { addMessage })(AddMessage);
