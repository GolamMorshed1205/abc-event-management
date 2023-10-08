// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZW0HUfBMPayoCXQvtLtHMeM0CNrwtSXA",
  authDomain: "abc-event-manager-a356d.firebaseapp.com",
  projectId: "abc-event-manager-a356d",
  storageBucket: "abc-event-manager-a356d.appspot.com",
  messagingSenderId: "433077362443",
  appId: "1:433077362443:web:d4bfaaa382eb76713ecc0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app