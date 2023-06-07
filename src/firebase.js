import { initializeApp } from "firebase/app";

//firebase configuration
const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
});

export default app;

/* import { initializeApp } from "firebase/app";

//firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyDhDCIAnIRHKk5xB5Ri6u3iFGwM5GTsLkc",
  authDomain: "react-quiz-dev-2fc62.firebaseapp.com",
  projectId: "react-quiz-dev-2fc62",
  storageBucket: "react-quiz-dev-2fc62.appspot.com",
  messagingSenderId: "854005127014",
  appId: "1:854005127014:web:210334d43ebe1b91355aa7",
});

export default app; */
