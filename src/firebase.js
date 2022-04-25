import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkaDUwBj34JpSxoJfJPznZgjK4nMRnYI4",
  authDomain: "freemail-1337.firebaseapp.com",
  projectId: "freemail-1337",
  storageBucket: "freemail-1337.appspot.com",
  messagingSenderId: "785344344701",
  appId: "1:785344344701:web:c69557e69b33ec6b9ab714",
  measurementId: "G-0X7BPMB2D8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
