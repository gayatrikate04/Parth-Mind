// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCM7OM4B3ftPCMgci3BdhT1FciFZcMKWo",
  authDomain: "parthdiary-f989b.firebaseapp.com",
  databaseURL: "https://parthdiary-f989b-default-rtdb.firebaseio.com",  // Database URL
  projectId: "parthdiary-f989b",
  storageBucket: "parthdiary-f989b.firebasestorage.app",
  messagingSenderId: "1073641635183",
  appId: "1:1073641635183:web:2d044c394ececf505e3c9a",
  measurementId: "G-FRKDCYNJDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = getDatabase(app);  // Initialize Realtime Database

export { db };  // Export db to use in other parts of the app
