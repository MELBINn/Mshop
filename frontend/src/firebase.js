// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mshop-1c07f.firebaseapp.com",
  projectId: "mshop-1c07f",
  storageBucket: "mshop-1c07f.appspot.com",
  messagingSenderId: "863165313482",
  appId: "1:863165313482:web:a67b2d783ec198add51f33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);