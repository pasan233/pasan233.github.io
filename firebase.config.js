// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCznKPkWMV-cBWoVVotSy5OByu8ftXvQJ4",
  authDomain: "sri-lanka-travel-2977a.firebaseapp.com",
  projectId: "sri-lanka-travel-2977a",
  storageBucket: "sri-lanka-travel-2977a.firebasestorage.app",
  messagingSenderId: "337174345806",
  appId: "1:337174345806:web:6380bc203005442ba42b1f",
  measurementId: "G-6JMDHZGQYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
