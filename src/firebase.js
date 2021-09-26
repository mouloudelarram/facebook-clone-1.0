import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0sdJt44TCsSIi--ERnASx7_nPIe1LrI",
  authDomain: "facebook-clone-20b82.firebaseapp.com",
  projectId: "facebook-clone-20b82",
  storageBucket: "facebook-clone-20b82.appspot.com",
  messagingSenderId: "374287380954",
  appId: "1:374287380954:web:2ac0d1f34a7c4639b1d0e3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
