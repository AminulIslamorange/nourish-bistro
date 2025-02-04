// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBodSIk0V6m9oXVt3RSTOsTqwcIrAXhtgg",
  authDomain: "nourish-restuarant.firebaseapp.com",
  projectId: "nourish-restuarant",
  storageBucket: "nourish-restuarant.firebasestorage.app",
  messagingSenderId: "730153795678",
  appId: "1:730153795678:web:a390308fd5569b2d76f4cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;