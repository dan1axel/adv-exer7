// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyB7GKhiTiVEjDDMxzXdgat9N8d01P9tPdc",
  authDomain: "adv-exer7-9643b.firebaseapp.com",
  projectId: "adv-exer7-9643b",
  storageBucket: "adv-exer7-9643b.appspot.com",
  messagingSenderId: "743064545002",
  appId: "1:743064545002:web:83432d6b21960811c51993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
