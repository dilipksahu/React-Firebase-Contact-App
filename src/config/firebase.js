// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHcGB0XpzhfbPKArOrV9wDN3CJZ3kgAs",
  authDomain: "vite-contact-900bb.firebaseapp.com",
  projectId: "vite-contact-900bb",
  storageBucket: "vite-contact-900bb.appspot.com",
  messagingSenderId: "719642020777",
  appId: "1:719642020777:web:e6ec898177d74b516b12b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);