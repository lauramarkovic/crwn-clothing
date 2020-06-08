import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4Gt3Ah2B6luN8LR4SCPcMY_TVDr2mQvI",
  authDomain: "crwn-db-d8a21.firebaseapp.com",
  databaseURL: "https://crwn-db-d8a21.firebaseio.com",
  projectId: "crwn-db-d8a21",
  storageBucket: "crwn-db-d8a21.appspot.com",
  messagingSenderId: "296313207139",
  appId: "1:296313207139:web:4ebf10761e93cc16067b56",
  measurementId: "G-L73VBPZ2ZD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;