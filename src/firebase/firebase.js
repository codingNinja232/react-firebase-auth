// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCzaMGT7bkAxQdwReZnpgC_E2J4e6In54",
  authDomain: "test4all-ebdf8.firebaseapp.com",
  projectId: "test4all-ebdf8",
  storageBucket: "test4all-ebdf8.firebasestorage.app",
  messagingSenderId: "369350526271",
  appId: "1:369350526271:web:e24fdc9389498d49233f8a",
  measurementId: "G-F8Q63KX9XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {app, auth, analytics};