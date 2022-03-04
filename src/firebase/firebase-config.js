import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCYfUz6HJKL5Z4W9IhIczeY7ddQUQLgswE",
    authDomain: "linkedin-clone-6b50c.firebaseapp.com",
    projectId: "linkedin-clone-6b50c",
    storageBucket: "linkedin-clone-6b50c.appspot.com",
    messagingSenderId: "848706080863",
    appId: "1:848706080863:web:f2bb6366b5102f76380bea"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export {auth,provider,storage}

export default db;