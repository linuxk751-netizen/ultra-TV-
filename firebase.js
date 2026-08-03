// استيراد Firebase من شبكة CDN الرسمية
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

// إعدادات مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyAGddfICIUS1NXSrX-p9HbkD4tYmMhbEM",
  authDomain: "ultra-tv-wep-2a10b.firebaseapp.com",
  projectId: "ultra-tv-wep-2a10b",
  storageBucket: "ultra-tv-wep-2a10b.firebasestorage.app",
  messagingSenderId: "888790728972",
  appId: "1:888790728972:web:daad8a471a47cfeae30929",
  measurementId: "G-40DNTV1DJ6"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };