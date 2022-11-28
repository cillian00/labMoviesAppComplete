// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0OcpaI59zvJnYJffxIq8ozpmdVCQJfQ0",
  authDomain: "webappproject-8f93b.firebaseapp.com",
  projectId: "webappproject-8f93b",
  storageBucket: "webappproject-8f93b.appspot.com",
  messagingSenderId: "177946757739",
  appId: "1:177946757739:web:c442b02dc7793f75203f2e",
  measurementId: "G-X7FGNY150S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)