import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDzn_QASd2iM9djdtufXQNDsNx-adSBpN0",
  authDomain: "home-decor-9e638.firebaseapp.com",
  projectId: "home-decor-9e638",
  storageBucket: "home-decor-9e638.firebasestorage.app",
  messagingSenderId: "118665286462",
  appId: "1:118665286462:web:e8d38580b7d1ce7308526f",
  measurementId: "G-M69K6L3E25"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)