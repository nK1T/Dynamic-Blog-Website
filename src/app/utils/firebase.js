// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-88b57.firebaseapp.com",
  projectId: "blog-88b57",
  storageBucket: "blog-88b57.appspot.com",
  messagingSenderId: "954963130168",
  appId: "1:954963130168:web:31fd80e0eb3322c876f3cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);