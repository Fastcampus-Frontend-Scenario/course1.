// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    // apiKey: process.env.NEXT_PUBLIC_APP_KEY!,
    // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
    // projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
    // storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
    // messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEING_SENDER_ID!,
    // appId: process.env.NEXT_PUBLIC_APP_ID!

    apiKey: "AIzaSyCLr6EN7ZboCNAIPjO-MP_mXXRH6MlGziY",
    authDomain: "react-test-1ce77.firebaseapp.com",
    projectId: "react-test-1ce77",
    storageBucket: "react-test-1ce77.appspot.com",
    messagingSenderId: "731611113437",
    appId: "1:731611113437:web:dcaff659a1c2298aeb3834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
