// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCarAq_gLHnqtZICIiROjt6dcY-45N1zuY",
  authDomain: "dragon-news-auth-1ca40.firebaseapp.com",
  projectId: "dragon-news-auth-1ca40",
  storageBucket: "dragon-news-auth-1ca40.firebasestorage.app",
  messagingSenderId: "793333814708",
  appId: "1:793333814708:web:4cbf74418fdef83c7fcee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;