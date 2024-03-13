// MessageList.js
import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
