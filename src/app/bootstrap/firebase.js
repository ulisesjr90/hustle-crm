// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "hustle-crm-ed1b0.firebaseapp.com",
  projectId: "hustle-crm-ed1b0",
  storageBucket: "hustle-crm-ed1b0.firebasestorage.app",
  messagingSenderId: "701167221436",
  appId: "1:701167221436:web:572254e552fbda96bdaeb9",
  measurementId: "G-R6JDMLW5G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);