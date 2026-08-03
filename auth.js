import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// إعدادات مشروعك الصحيحة 100%
const firebaseConfig = {
  apiKey: "AIzaSyAGdDficiUSlNXSrX-p9HbkD4tYmMhbEM",
  authDomain: "ultra-tv-wep-2a10b.firebaseapp.com",
  projectId: "ultra-tv-wep-2a10b",
  storageBucket: "ultra-tv-wep-2a10b.appspot.com",
  messagingSenderId: "888790728972",
  appId: "1:888790728972:web:daad8a471a47cfeae30929",
  measurementId: "G-40DNTV1DJ6"
};

// تهيئة فايربيس
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// تفعيل زر تسجيل الدخول بواسطة جوجل
const googleLoginBtn = document.getElementById('google-login-btn');

if (googleLoginBtn) {
    googleLoginBtn.addEventListener('click', () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("تم تسجيل الدخول بنجاح:", user.displayName);
                alert("مرحباً بك يا " + user.displayName + " في Ultra TV!");
            })
            .catch((error) => {
                console.error("خطأ:", error.code, error.message);
                alert("حدث خطأ: " + error.message);
            });
    });
}