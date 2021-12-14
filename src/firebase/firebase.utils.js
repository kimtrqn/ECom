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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //check if the userAuth is in the documents;

  const snapShot = await userRef.get(); //await because userAuth is async .get is to find the doc

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//need to enable google auth in firebase setting on the web
