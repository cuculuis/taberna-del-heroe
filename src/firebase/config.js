import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd18IkCpprPMyY5wq0FW9EN8xivyV3Mzc",
    authDomain: "taberna-del-heroe.firebaseapp.com",
    projectId: "taberna-del-heroe",
    storageBucket: "taberna-del-heroe.appspot.com",
    messagingSenderId: "120540336780",
    appId: "1:120540336780:web:cec038f1a84e8eb0ad21a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)