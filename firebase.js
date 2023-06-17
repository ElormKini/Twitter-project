// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeb9E4wIFSw6r31i6KDLruqxGPlulX4cc",
  authDomain: "twitter-clone-9bf72.firebaseapp.com",
  projectId: "twitter-clone-9bf72",
  storageBucket: "twitter-clone-9bf72.appspot.com",
  messagingSenderId: "279037070035",
  appId: "1:279037070035:web:7cfac4cd5469de27b96226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth= getAuth(app)
export const storage = getStorage()