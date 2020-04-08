import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'; // hace referencia a cloud firestore

firebase.initializeApp({
    apiKey: "AIzaSyDU1Kypt-sjsa63DpzsABrBxW_CAJrlvUA",
    authDomain: "anda-db.firebaseapp.com",
    databaseURL: "https://anda-db.firebaseio.com",
    projectId: "anda-db",
    storageBucket: "anda-db.appspot.com",
    messagingSenderId: "798105028746",
    appId: "1:798105028746:web:b7788ba3eaa83314c10573",
    measurementId: "G-N2NP5L16FE"
});

// Servicios de autenticación.
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// // Servicio Base de datos
const firestoreDB = firebase.firestore();

export { auth, googleProvider, firestoreDB }