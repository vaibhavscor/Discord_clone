import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDRtNnc7kzQDHkf9h83JfRMttTMSZJz37Y",
  authDomain: "for-test-data.firebaseapp.com",
  projectId: "for-test-data",
  storageBucket: "for-test-data.appspot.com",
  messagingSenderId: "484814568288",
  appId: "1:484814568288:web:9199991c8d6feae6463c05",
  measurementId: "G-2LQ02PXSLR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
