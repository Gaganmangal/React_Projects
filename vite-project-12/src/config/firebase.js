// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0zv4SPczl8lm3jXArNaZeQfgk5fExU4",
  authDomain: "vite-contact-app-e0810.firebaseapp.com",
  projectId: "vite-contact-app-e0810",
  storageBucket: "vite-contact-app-e0810.appspot.com",
  messagingSenderId: "266523184046",
  appId: "1:266523184046:web:27a509940895e58652163f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
