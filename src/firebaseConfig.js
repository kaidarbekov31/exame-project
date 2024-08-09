// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtI_jBeKK8TGbn97htFUt0Z3wS4eoYDlA",
  authDomain: "tank-d2bca.firebaseapp.com",
  projectId: "tank-d2bca",
  storageBucket: "tank-d2bca.appspot.com",
  messagingSenderId: "143357024361",
  appId: "1:143357024361:web:719363b65bd5c8f765eaf8",
  measurementId: "G-VXFBPVMC85",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
