// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyD03wAEmAmLQHudrpUXVS-XyN-xxLntW5c",
//   authDomain: "social-events-auth.firebaseapp.com",
//   projectId: "social-events-auth",
//   storageBucket: "social-events-auth.appspot.com",
//   messagingSenderId: "142055408767",
//   appId: "1:142055408767:web:51efd6aca2c7e68d172b4a"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;