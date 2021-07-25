import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATvj_w5psbhNnCb7LR3LelDjnPM87EGBc",
  authDomain: "devspace-1616188316166.firebaseapp.com",
  projectId: "devspace-1616188316166",
  storageBucket: "devspace-1616188316166.appspot.com",
  messagingSenderId: "965567959925",
  appId: "1:965567959925:web:e80d5ccfa9457ae1adf93c",
  measurementId: "G-WN9Z7F9XY8",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
