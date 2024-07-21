// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg1-593BypxQdTJgiu0nT79RLMwmPDe7E",
  authDomain: "react-disneyplus-1b0a0.firebaseapp.com",
  projectId: "react-disneyplus-1b0a0",
  storageBucket: "react-disneyplus-1b0a0.appspot.com",
  messagingSenderId: "498685833489",
  appId: "1:498685833489:web:c7878bd37a3f1cec49dcb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;