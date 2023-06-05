import { initializeApp } from "firebase/app";

//firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_API_API_KEY,
  authDomain: process.env.REACT_API_AUTH_DOMAIN,
  projectId: process.env.REACT_API_PROJECT_ID,
  storageBucket: process.env.REACT_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_API_APP_ID,
});

export default app;
