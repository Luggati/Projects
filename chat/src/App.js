// src/App.js

import React from 'react';
import AddMessage from './components/AddMessage';
import MessagesList from './components/MessagesList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="chat-app">
      <div className="users-list">
        <Sidebar />
      </div>
      <div className="message-list">
        <MessagesList />
      </div>
      <div className="new-message-box">
        <AddMessage />
      </div>
    </div>
  );
}

export default App;
