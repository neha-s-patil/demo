// ConversationsScreen.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConversationData } from './api'; // Import the function to fetch conversation data

function ConversationsScreen() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Fetch or set the list of conversations
    // For simplicity, we'll simulate fetching from an external source
    const fetchedConversations = [
      { id: 1, name: "Conversation 1" },
      { id: 2, name: "Conversation 2" },
      // Add more conversations as needed
    ];
    setConversations(fetchedConversations);
  }, []);

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map(conversation => (
          <li key={conversation.id}>
            <Link to={`/conversation/${conversation.id}`}>{conversation.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConversationsScreen;
