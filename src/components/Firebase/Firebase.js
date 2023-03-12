import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCMu2mECZtc2aPACNjKxNenOj7xqLaiiAI",
    authDomain: "reenbit-test-940c1.firebaseapp.com",
    projectId: "reenbit-test-940c1",
    storageBucket: "reenbit-test-940c1.appspot.com",
    messagingSenderId: "503953938274",
    appId: "1:503953938274:web:a745274cd4bb2e5cbcfe3b"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)

export {auth, firestore}

export const googleAuthProvider = new GoogleAuthProvider();