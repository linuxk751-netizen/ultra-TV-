import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGdDdficiUSlNXSrX-p9HbkD4tYmMhbwM",
  authDomain: "ultra-tv-wep-2a10b.firebaseapp.com",
  projectId: "ultra-tv-wep-2a10b",
  storageBucket: "ultra-tv-wep-2a10b.firebasestorage.app",
  messagingSenderId: "888790728972",
  appId: "1:888790728972:web:daad8a471a47cfeae30929",
  measurementId: "G-40DNTV1DJ6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);