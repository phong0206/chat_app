// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkptQ1NcYAA4Vd7HqgjZmmrXSSBy2sg5o",
  authDomain: "chatapp-b5f0f.firebaseapp.com",
  projectId: "chatapp-b5f0f",
  storageBucket: "chatapp-b5f0f.appspot.com",
  messagingSenderId: "36683470868",
  appId: "1:36683470868:web:65a3e4263374a5896caf01",
  measurementId: "G-FGWGV6J4DM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const facebookProvider = new FacebookAuthProvider();
