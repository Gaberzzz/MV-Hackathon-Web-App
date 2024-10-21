// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYvbdkyFDw6BhgDvcDLVGZJKNLQ-HMsQI",
  authDomain: "mv-bbc.firebaseapp.com",
  projectId: "mv-bbc",
  storageBucket: "mv-bbc.appspot.com",
  messagingSenderId: "477928848723",
  appId: "1:477928848723:web:50f68f9fa6fb833fc2b5a6",
  measurementId: "G-D45YGCCX09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;