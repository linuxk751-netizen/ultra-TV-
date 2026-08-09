import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHvmQ0Q3yM9rhkt2eERLbRqX_sBfXJ2xg",
  authDomain: "ultra-tv-160b7.firebaseapp.com",
  projectId: "ultra-tv-160b7",
  storageBucket: "ultra-tv-160b7.firebasestorage.app",
  messagingSenderId: "75204425234",
  appId: "1:75204425234:web:705acff8a4fbebba058acb"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);