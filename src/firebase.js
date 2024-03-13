// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set,get } from "firebase/database";
// const firebaseConfig = {
//   apiKey: "AIzaSyDCy005RWP5wTANjUJE9VPAwmVyrExRF_s",
//   authDomain: "conversations-4f48b.firebaseapp.com",
//   projectId: "conversations-4f48b",
//   storageBucket: "conversations-4f48b.appspot.com",
//   messagingSenderId: "439836786850",
//   appId: "1:439836786850:web:b3ec96e9477bc2aa0957fb",
//   measurementId: "G-3GQGN0XMKJ"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const database = getDatabase(firebaseApp);

// // Initialize default data
// const initializeDefaultData = async () => {
//   try {
//     const conversationsRef = ref(database, 'conversations');

//     // Check if data already exists
//     const snapshot = await get(conversationsRef);
//     if (!snapshot.exists()) {
//       // Add default conversations and messages
//       await set(conversationsRef, {
//         1: {
//           id: 1,
//           name: "John's Conversation",
//           messages: [
//             { id: 1, text: 'Hello, how are you?' },
//             { id: 2, text: 'I am good, thanks!' }
//           ]
//         },
//         // Add more conversations as needed
//       });
//     }
//   } catch (error) {
//     console.error('Error initializing default data:', error);
//   }
// };

// initializeDefaultData();

// export default database;
// firebase.js

const defaultConversations = [
  {
    id: 1,
    name: "John's Conversation",
    messages: [
      { id: 1, text: 'Hello, how are you?' },
      { id: 2, text: 'I am good, thanks!' }
    ]
  },
  // Add more conversations as needed
];

const initializeDefaultData = async () => {
  try {
    // Check if data already exists
    // For static data, you can assume data does not exist as it's not fetched from a database
    const conversationsExist = false;

    if (!conversationsExist) {
      // If data doesn't exist, you can use the default conversations directly
      // You can also store them in local storage or use Redux state management
      // For simplicity, we'll log the default conversations here
      console.log('Default Conversations:', defaultConversations);
    }
  } catch (error) {
    console.error('Error initializing default data:', error);
  }
};

initializeDefaultData();

export default defaultConversations;
