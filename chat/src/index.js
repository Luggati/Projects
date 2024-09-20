import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createStore } from 'redux'; // Import createStore from redux
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import chatReducer from './reducers/chatReducer'; // Import the chat reducer

// Create the Redux store using the chat reducer
const store = createStore(chatReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Log performance metrics
reportWebVitals();
