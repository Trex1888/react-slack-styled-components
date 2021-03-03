import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrNJ54NdiBqMcEG334LL4XFhBguADMDTw",
  authDomain: "slack-styled.firebaseapp.com",
  projectId: "slack-styled",
  storageBucket: "slack-styled.appspot.com",
  messagingSenderId: "302819725971",
  appId: "1:302819725971:web:c090868bcacad436cff366",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
