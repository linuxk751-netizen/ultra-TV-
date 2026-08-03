import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGdDdficiUSlNXSrX-p9HbkD4tYmMhbwM",
  authDomain: "ultra-tv-wep-2a10b.firebaseapp.com",
  projectId: "ultra-tv-wep-2a10b",
  storageBucket: "ultra-tv-wep-2a10b.firebasestorage.app",
  messagingSenderId: "888790728972",
  appId: "1:888790728972:web:daad8a471a47cfeae30929"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// تفعيل زر تسجيل الدخول بواسطة جوجل الحقيقي
document.getElementById('google-login-btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert("مرحباً بك " + user.displayName);
            showPage('home'); 
        })
        .catch((error) => {
            console.error(error.message);
            alert("فشل تسجيل الدخول: " + error.message);
        });
});