
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chatActions'; 

const AddMessage = ({ dispatch }) => {
  let input;

  return (
    <section id="new-message">
      <input
        type="text"
        placeholder="Type a message..."
        ref={(node) => {
          input = node;
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            
            dispatch(addMessage({author : 'Me',text: input.value }));
            input.value = ''; // Clear the input after dispatching
          }
        }}
      />
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddMessage);
