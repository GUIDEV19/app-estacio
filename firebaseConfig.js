import { initializeApp } from 'firebase/app';
//import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkrpAeJGNe32aC2YCknyRP4dybvqjD0jc",
  authDomain: "loa-app-a2dd6.firebaseapp.com",
  projectId: "loa-app-a2dd6",
  storageBucket: "loa-app-a2dd6.appspot.com",
  messagingSenderId: "878562512324",
  appId: "1:878562512324:web:ea37368587ee212f07a891"

};

const app = initializeApp(firebaseConfig);


export const FIREBASE_APP = app;
export default FIRESTORE_DB = getFirestore(app);
//export const FIREBASE_AUTH = getAuth(app);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
