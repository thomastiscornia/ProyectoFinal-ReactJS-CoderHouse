import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDP7p3eVOFk6aHD4yhNGg_lGVVBw2cjj2U",
    authDomain: "weeken-delivery.firebaseapp.com",
    projectId: "weeken-delivery",
    storageBucket: "weeken-delivery.appspot.com",
    messagingSenderId: "109439869649",
    appId: "1:109439869649:web:d5333197d2ae8649129bf0",
    measurementId: "G-8N4DN1YLTY"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

initializeApp(firebaseConfig)