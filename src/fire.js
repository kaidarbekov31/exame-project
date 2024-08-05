// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyARxdpWGuebrmzq8_LBnUl7KvBTavqM-2E",
  authDomain: "project-wot-50745.firebaseapp.com",
  projectId: "project-wot-50745",
  storageBucket: "project-wot-50745.appspot.com",
  messagingSenderId: "668331022457",
  appId: "1:668331022457:web:361fa50d89dd07a8aedca8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
export const auth = getAuth(app);

export default app;
