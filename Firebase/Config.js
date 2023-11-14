import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD7zX4-9mJdmPmpefTbxlbjTh8RWVLvbU0",
  authDomain: "preventhi.firebaseapp.com",
  databaseURL: "https://preventhi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "preventhi",
  storageBucket: "preventhi.appspot.com",
  messagingSenderId: "429973476280",
  appId: "1:429973476280:web:0cce6eb78261625c5df54d",
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase()
export {firebase, db};
