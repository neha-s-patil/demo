import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getConversationData } from './api'; // Import the function to fetch conversation data

function ConversationScreen() {
  const { conversationId } = useParams();
  const [conversation, setConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('User1'); // Set the current user

  useEffect(() => {
    // Fetch conversation data based on the conversationId
    const fetchedConversation = getConversationData(conversationId);
    setConversation(fetchedConversation);
  }, [conversationId]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') {
      return;
    }
    const updatedConversation = {
      ...conversation,
      messages: [
        ...conversation.messages,
        { id: conversation.messages.length + 1, text: newMessage, sender: currentUser }
      ]
    };
    setConversation(updatedConversation);
    setNewMessage('');
  };

  return (
    <div>
      <h2>{conversation ? conversation.name : 'Loading...'}</h2>
      {conversation && (
        <div>
          <ul>
            {conversation.messages.map(message => (
              <li key={message.id}>
                {message.sender}: {message.text}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input type="text" value={newMessage} onChange={handleInputChange} />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ConversationScreen;
