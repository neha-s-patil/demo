// App.js
import React, { useState } from 'react';
import ConversationList from './ConversationList';
import MessageList from './MessageList';

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationSelect = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  return (
    <div className="app">
      <ConversationList onSelect={handleConversationSelect} />
      <MessageList conversationId={selectedConversation} />
    </div>
  );
};

export default Chat;
