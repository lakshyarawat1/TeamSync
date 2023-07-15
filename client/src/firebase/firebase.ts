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
const provider = new GoogleAuthProvider();
const auth = getAuth();
export async function signUp() {
    const res = await signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            const res = { credential, token, user };
            return res;
        })
        .catch(err => {
            const errCode = err.code;
            const errMessage = err.message;
            const email = err.customData.email;
            const res = { errCode, errMessage, email };
            return res;
        });
    return res;
}