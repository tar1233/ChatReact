import firebase from "firebase";

//set firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAl_D0RN6dze09FvaOIe6RmN3Br0srC_9M",
  authDomain: "testreact-8ea27.firebaseapp.com",
  databaseURL: "https://testreact-8ea27-default-rtdb.firebaseio.com",
  projectId: "testreact-8ea27",
  storageBucket: "testreact-8ea27.appspot.com",
  messagingSenderId: "204686015529",
  appId: "1:204686015529:web:a52bdfe41f1c5fe485f038",
  measurementId: "G-1S13V4MKLF",
});

const db = firebase.firestore();

export default db;
