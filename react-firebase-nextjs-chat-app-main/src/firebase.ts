// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLr6EN7ZboCNAIPjO-MP_mXXRH6MlGziY",
    authDomain: "react-test-1ce77.firebaseapp.com",
    projectId: "react-test-1ce77",
    storageBucket: "react-test-1ce77.appspot.com",
    messagingSenderId: "731611113437",
    appId: "1:731611113437:web:dcaff659a1c2298aeb3834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
