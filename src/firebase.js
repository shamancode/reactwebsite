import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyArHehmnCV5s4Ktd8qxb-mZmprJcHyqfwQ",
  authDomain: "react-crud-5dac7.firebaseapp.com",
  databaseURL: "https://react-crud-5dac7-default-rtdb.firebaseio.com",
  projectId: "react-crud-5dac7",
  storageBucket: "react-crud-5dac7.appspot.com",
  messagingSenderId: "398835136728",
  appId: "1:398835136728:web:dd08522d3f543227dd3fad",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
