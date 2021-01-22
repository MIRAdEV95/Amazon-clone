// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbcqVgorXJt7JmnbieC7dnFY_cmnXly5w",
  authDomain: "clone-c9008.firebaseapp.com",
  projectId: "clone-c9008",
  storageBucket: "clone-c9008.appspot.com",
  messagingSenderId: "29433121507",
  appId: "1:29433121507:web:ea05ed2260eb2a2309d3d6",
  measurementId: "G-X1C0QF8ZRJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
