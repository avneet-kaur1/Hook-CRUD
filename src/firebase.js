import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDaCVe74_kxeepFwDYxx6IMlxl5eKs65rA",
    authDomain: "hook-crud.firebaseapp.com",
    databaseURL: "https://hook-crud-default-rtdb.firebaseio.com",
    projectId: "hook-crud",
    storageBucket: "hook-crud.appspot.com",
    messagingSenderId: "728358436530",
    appId: "1:728358436530:web:ee60f25015d61fe73e93ab",
    measurementId: "G-59TG35JDCY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.database().ref();
export default db.database.ref();
