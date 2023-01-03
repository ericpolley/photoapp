// Import the functions you need from the SDKs you need
import { Firestore } from "@firebase/firestore";
import firebase from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaklswYOwMyOhBYE3c67tRk8w6OByVM78",
  authDomain: "photoapp-f6f39.firebaseapp.com",
  projectId: "photoapp-f6f39",
  storageBucket: "photoapp-f6f39.appspot.com",
  messagingSenderId: "700480776276",
  appId: "1:700480776276:web:1debf2530a0c71e6e525c1",
  measurementId: "G-PE6BMVZPNV"
};

const app = firebase.initializeApp(firebaseConfig);


export const db = new Firestore();