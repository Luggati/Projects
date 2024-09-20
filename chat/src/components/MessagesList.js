
import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <div>
    {messages.map((msg, index) => (
      <Message key={index} message={msg} />
    ))}
  </div>
);

// Map state to props to access the list of messages from the Redux store
const mapStateToProps = (state) => ({
  messages: state.messages,
});

export default connect(mapStateToProps)(MessagesList);
