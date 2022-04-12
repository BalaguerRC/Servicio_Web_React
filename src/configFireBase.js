import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBfpiH2j-H5QnjYlsrXM9SIEimP3r2xuoM",
  authDomain: "agenda-itla-abril-2022-1.firebaseapp.com",
  projectId: "agenda-itla-abril-2022-1",
  storageBucket: "agenda-itla-abril-2022-1.appspot.com",
  messagingSenderId: "866757387404",
  appId: "1:866757387404:web:4a9bf7972c08ba41fa87a9"
};

firebase.initializeApp(firebaseConfig);

export const basededatos = firebase.firestore();
export default firebase;
