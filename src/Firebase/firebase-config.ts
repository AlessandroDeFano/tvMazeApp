// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFeXXdI0PdNV7hQ84bc-GdhMRNOtuYJH0",
  authDomain: "tv-maze-app-6f269.firebaseapp.com",
  projectId: "tv-maze-app-6f269",
  storageBucket: "tv-maze-app-6f269.appspot.com",
  messagingSenderId: "394501785292",
  appId: "1:394501785292:web:539a42b421d6cbbca1a469",
  databaseURL:'https://tv-maze-app-6f269-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new firebase.auth.GoogleAuthProvider();
export const database = getDatabase(app);
