import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDJG341AZU3EWHy3qw18R7tfFXL1OO5-vQ",
    authDomain: "fateful-2e2a4.firebaseapp.com",
    projectId: "fateful-2e2a4",
    storageBucket: "fateful-2e2a4.appspot.com",
    messagingSenderId: "422621360412",
    appId: "1:422621360412:web:a13da34fbc4cecc007cad9"
}).auth();