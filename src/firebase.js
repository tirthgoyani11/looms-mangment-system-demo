import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ8j7L2-XUp0rN6ORNDAIjhOvWEiPGZ48",
  authDomain: "febri-flow.firebaseapp.com",
  projectId: "febri-flow",
  storageBucket: "febri-flow.firebasestorage.app",
  messagingSenderId: "662056079508",
  appId: "1:662056079508:web:e5288a95fbd2680ecfa481",
  measurementId: "G-ZFZRMHPFLL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
