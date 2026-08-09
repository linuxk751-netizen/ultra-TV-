import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.x.x/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCHvmQ0Q3yM9rhkt2eERLbRqX_sBfXJ2xg",
  authDomain: "ultra-tv-160b7.firebaseapp.com",
  projectId: "ultra-tv-160b7",
  storageBucket: "ultra-tv-160b7.firebasestorage.app",
  messagingSenderId: "75204425234",
  appId: "1:75204425234:web:705acff8a4fbebba058acb"
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