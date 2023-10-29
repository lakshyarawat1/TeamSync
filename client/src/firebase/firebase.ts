import firebase from 'firebase/compat/app'
import { GoogleAuthProvider,getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCSBykbykIziJKSdLatijW_M-MgAczKtrE",
  authDomain: "teamsync-338f4.firebaseapp.com",
  projectId: "teamsync-338f4",
  storageBucket: "teamsync-338f4.appspot.com",
  messagingSenderId: "548234989595",
  appId: "1:548234989595:web:abd89eeeb8a8188658a8be",
  measurementId: "G-HSZ2574HW6",
};

firebase.initializeApp(firebaseConfig)
export const provider = new GoogleAuthProvider();
export const auth = getAuth();