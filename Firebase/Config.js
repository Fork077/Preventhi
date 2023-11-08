import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDVTZDRixdmfhCVmYnESKa-yxFmDrGkHeA",
    authDomain: "project-hora.firebaseapp.com",
    databaseURL: "https://project-hora-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-hora",
    storageBucket: "project-hora.appspot.com",
    messagingSenderId: "723078864975",
    appId: "1:723078864975:web:d75d49b374e8214a0b8a3a"
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { firebase, db };