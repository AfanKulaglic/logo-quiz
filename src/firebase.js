// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3GUNLpMgqlsxyafwPiFLtVWlMyDNTpM4",
  authDomain: "kvizko-88342.firebaseapp.com",
  databaseURL: "https://kvizko-88342-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kvizko-88342",
  storageBucket: "kvizko-88342.appspot.com",
  messagingSenderId: "288674167006",
  appId: "1:288674167006:web:722da289c5206ea8302a4f",
  measurementId: "G-14NSMTKSBD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app)