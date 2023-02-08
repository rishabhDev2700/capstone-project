import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzI1_uTzKvR6jhFuaD62utLi1B2bUw9zU",
  authDomain: "do-too-36784.firebaseapp.com",
  projectId: "do-too-36784",
  storageBucket: "do-too-36784.appspot.com",
  messagingSenderId: "297741409799",
  appId: "1:297741409799:web:cc1cb80d2e0c0bfeced4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();