
import firebase from 'firebase/compat'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIpa9XGQmDzudM_YHotX9xd5K5rVNzJaM",
  authDomain: "clone-73789.firebaseapp.com",
  projectId: "clone-73789",
  storageBucket: "clone-73789.appspot.com",
  messagingSenderId: "830168362162",
  appId: "1:830168362162:web:6e0676d81f4834158d6dab",
  measurementId: "G-CYRX96CY3E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };