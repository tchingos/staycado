// Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBGqtE8-zYcs4nnE_CScSUrxc85JBkMarY",
  authDomain: "staycado.firebaseapp.com",
  projectId: "staycado",
  storageBucket: "staycado.firebasestorage.app",
  messagingSenderId: "369348767227",
  appId: "1:369348767227:web:c39e0fe4e04a499af12f5e",
  measurementId: "G-K6S1YJL8DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;