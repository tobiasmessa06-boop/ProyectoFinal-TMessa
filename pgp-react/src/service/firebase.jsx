// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56hP8cShnWfT9jsKaQDqt_q018wabgLs",
  authDomain: "messa--c88100.firebaseapp.com",
  projectId: "messa--c88100",
  storageBucket: "messa--c88100.firebasestorage.app",
  messagingSenderId: "1054813131199",
  appId: "1:1054813131199:web:d5877b92fce0b583edd10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);