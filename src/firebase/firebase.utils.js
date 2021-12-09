import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCYPnSJNLxByFcipRl_mn3EmnqVgO5tyfc",
  authDomain: "urban-crown-db.firebaseapp.com",
  projectId: "urban-crown-db",
  storageBucket: "urban-crown-db.appspot.com",
  messagingSenderId: "218241027961",
  appId: "1:218241027961:web:b37484eebc7aef374c29a8",
  measurementId: "${config.measurementId}"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//need to enable google auth in firebase setting on the web
