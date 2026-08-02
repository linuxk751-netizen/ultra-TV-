// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGdDdficIUSlNXSrX-p9HbkD4tYmMhbeM",
  authDomain: "ultra-tv-wep-2a10b.firebaseapp.com",
  projectId: "ultra-tv-wep-2a10b",
  storageBucket: "ultra-tv-wep-2a10b.firebasestorage.app",
  messagingSenderId: "888790728972",
  appId: "1:888790728972:web:daad8a471a47cfeae30929",
  measurementId: "G-40DNTV1DJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };