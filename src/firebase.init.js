// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_d61Wa-HxyIkei62Bz4VSxIEhfKHcCV4",
  authDomain: "ema-john-with-authentica-53eec.firebaseapp.com",
  projectId: "ema-john-with-authentica-53eec",
  storageBucket: "ema-john-with-authentica-53eec.appspot.com",
  messagingSenderId: "419550881441",
  appId: "1:419550881441:web:1acdf7202826088e5732e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;