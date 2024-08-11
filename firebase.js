// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtjzA1v7eLnuG5cP0Q0LexaV72PRgziRU",
  authDomain: "inventory-management-17e43.firebaseapp.com",
  projectId: "inventory-management-17e43",
  storageBucket: "inventory-management-17e43.appspot.com",
  messagingSenderId: "483940333419",
  appId: "1:483940333419:web:03778b24393eec6577be2e",
  measurementId: "G-B20Q0RXMC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}