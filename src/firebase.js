// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const config = {
    apiKey: "AIzaSyAL1ueb-9WlYCHYltsWF9vOHUdA3v89leI",
    authDomain: "petadopt-2c659.firebaseapp.com",
    databaseURL: "https://petadopt-2c659.firebaseio.com",
    projectId: "petadopt-2c659",
    storageBucket: "petadopt-2c659.appspot.com",
    messagingSenderId: "844686578631",
    appId: "1:844686578631:web:0dcbc4b2e9a4276c60ffe2"
  };
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;