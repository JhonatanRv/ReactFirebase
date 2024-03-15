import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB_GZLpaRhCY7hPlZ06cHNVrQp8tf20mlw",
  authDomain: "senai-auth-jhonatan.firebaseapp.com",
  projectId: "senai-auth-jhonatan",
  storageBucket: "senai-auth-jhonatan.appspot.com",
  messagingSenderId: "806846831221",
  appId: "1:806846831221:web:91b13fea821320ac0cf63c"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
