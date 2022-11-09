// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkt-7XOoJs4f0L5QKwFpBntPOrp53IEt0",
  authDomain: "cftf-e2fcf.firebaseapp.com",
  projectId: "cftf-e2fcf",
  storageBucket: "cftf-e2fcf.appspot.com",
  messagingSenderId: "886350230604",
  appId: "1:886350230604:web:838b08a0f991e9748370e9",
  measurementId: "G-Y9MHY01HPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);