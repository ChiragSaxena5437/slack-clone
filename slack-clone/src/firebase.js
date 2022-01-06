// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCn9LBtcBACA4RAu6D8gUN7S0LouI2N2jk",
    authDomain: "slack-clone-788a0.firebaseapp.com",
    projectId: "slack-clone-788a0",
    storageBucket: "slack-clone-788a0.appspot.com",
    messagingSenderId: "865946967123",
    appId: "1:865946967123:web:fab3e2df5096d473667aa6",
    measurementId: "G-VME34L7JTR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;