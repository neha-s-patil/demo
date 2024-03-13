// MessageForm.js
import React, { useState } from 'react';

const MessageForm = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
