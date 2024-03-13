// In a separate file, such as api.js or utils.js

export const getConversationData = (conversationId) => {
    // Here, you can define your conversation data based on the conversationId
    // This could be from a static array, local storage, or any other data source
    // For simplicity, we'll use a static object with sample data
  
    const conversationsData = {
      1: {
        id: 1,
        name: "Conversation 1",
        messages: [
          { id: 1, text: "Hello!", sender: "User1" },
          { id: 2, text: "Hi there!", sender: "User2" },
          // Add more messages as needed
        ],
      },
      2: {
        id: 2,
        name: "Conversation 2",
        messages: [
          { id: 1, text: "Hey!", sender: "User1" },
          { id: 2, text: "What's up?", sender: "User2" },
          // Add more messages as needed
        ],
      },
      // Add more conversations as needed
    };
  
    // Simulate fetching conversation data based on conversationId
    return conversationsData[conversationId];
  };
  