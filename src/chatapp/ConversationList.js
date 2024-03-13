// ConversationList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ConversationList = ({ conversations }) => {
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
};

export default ConversationList;
