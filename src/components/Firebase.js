import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBkoBhe3WdCxD9puaQueZPwbb-K3QXYsU",
    authDomain: "aablive-7fedc.firebaseapp.com",
    projectId: "aablive-7fedc",
    storageBucket: "aablive-7fedc.appspot.com",
    messagingSenderId: "830714475971",
    appId: "1:830714475971:web:cc00cf8a19fb76b6f37976",
    measurementId: "G-N7D9R909CS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };