import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAB37-Y-l-iAek-F4y-7fmi2PdqQBRXkq8",
    authDomain: "pro71-ebd20.firebaseapp.com",
    projectId: "pro71-ebd20",
    storageBucket: "pro71-ebd20.appspot.com",
    messagingSenderId: "317465215052",
    appId: "1:317465215052:web:1beb6c93a03ab4203b34e9"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
