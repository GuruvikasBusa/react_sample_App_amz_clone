import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOnIerdFUA20QvYj4sQZr0ekSZJasj6XQ",
    authDomain: "challenge-7adb9.firebaseapp.com",
    projectId: "challenge-7adb9",
    storageBucket: "challenge-7adb9.appspot.com",
    messagingSenderId: "115926547310",
    appId: "1:115926547310:web:eac8ad24945c60aa79df7f",
    measurementId: "G-VXD71JKFL4"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};