import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2gWceZHYgEwbFRu-BKHH-132Gzj2aJ0",
  authDomain: "fb-react-2df42.firebaseapp.com",
  projectId: "fb-react-2df42",
  storageBucket: "fb-react-2df42.appspot.com",
  messagingSenderId: "204461362306",
  appId: "1:204461362306:web:969dcdb7d0a9a9ca21b89b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// con el metodo getFirestore y trayendo a app nos autenticamos
export const db = getFirestore (app);

