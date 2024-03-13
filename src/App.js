import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ConversationsScreen from './chatapp/ConversationsScreen';
import ConversationScreen from './chatapp/ConversationScreen';
import Weather from './wheatherapp/Wheather';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/conversation" element={<ConversationsScreen />} />
          <Route path="/weather" element={<Weather />} />

          <Route path="/conversation/:conversationId" element={<ConversationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
