import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
   
    apiKey: "AIzaSyDsX80jguDzFhPbAOG0lUKqYGKOhElqFEc",
    authDomain: "react-app-assignment-29f93.firebaseapp.com",
    databaseURL: "https://react-app-assignment-29f93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-app-assignment-29f93",
    storageBucket: "react-app-assignment-29f93.appspot.com",
    messagingSenderId: "843791609098",
    appId: "1:843791609098:web:bfed64659e2c7fb8639ef3",
    measurementId: "G-8SP2Q3CC27"
  };
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();