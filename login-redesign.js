/* login-redesign.js
   تصميم نافذة تسجيل الدخول (بطاقة بيضاء + صورة بحافة منحنية) مع الحفاظ على Google Sign-In.
   الاستخدام: حط هذا الملف جنب index.html وأضف قبل </body>:
   <script src="login-redesign.js"></script>
*/
(function () {
  var IMG = 'https://i.ibb.co/C3HNJS5k/ab67656300005f1f87ee80a61a59ec9551b56a56.jpg';

  // حافة الصورة المنحنية (LTR) ومقلوبة للعربي (RTL)
  function mask(d) {
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'><path d='" + d + "'/></svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(svg) + '")';
  }
  var MASK_LTR = mask('M34,0 L100,0 L100,100 L0,100 C20,90 28,76 26,62 C24,48 10,40 18,26 C23,17 31,10 34,0 Z');
  var MASK_RTL = mask('M66,0 L0,0 L0,100 L100,100 C80,90 72,76 74,62 C76,48 90,40 82,26 C77,17 69,10 66,0 Z');

  var CSS = `
#authModal.auth-modal-overlay{align-items:flex-start;overflow-y:auto;background:rgba(10,8,24,.72)}
#authModal .lg-card{position:relative;display:flex;width:100%;max-width:880px;min-height:540px;margin:auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.55);font-family:'Readex Pro','Alexandria',sans-serif;color:#1b1464;text-align:start}
#authModal.show .lg-card{animation:lgPop .45s cubic-bezier(.16,1,.3,1)}
@keyframes lgPop{from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:none}}

#authModal .lg-form-side{position:relative;z-index:2;flex:0 0 46%;max-width:46%;box-sizing:border-box;padding:40px 44px 28px;display:flex;flex-direction:column}
#authModal .lg-dot{display:block;width:24px;height:24px;border-radius:50%;background:#f9b659;margin:0 0 38px}
#authModal .lg-welcome{margin:0;font-size:14px;font-weight:600;color:#6c58c4}
#authModal .lg-brand{margin:2px 0 32px;font-family:'Alexandria',sans-serif;font-size:32px;font-weight:800;line-height:1.2;color:#1b1464}

#authModal .lg-form{display:flex;flex-direction:column}
#authModal .lg-field{position:relative;margin:0 0 22px}
#authModal .lg-field label{display:block;margin:0 0 2px;font-size:12px;font-weight:600;color:#7d5fc7}
#authModal .lg-field input{width:100%;box-sizing:border-box;margin:0;padding:6px 0 8px;padding-inline-end:28px;border:0;border-bottom:1px solid #c9ccd6;border-radius:0;background:transparent;box-shadow:none;outline:none;color:#262640;font-family:inherit;font-size:14px}
#authModal .lg-field input:focus{border-bottom-color:#a24fc4}
#authModal .lg-eye{position:absolute;inset-inline-end:2px;bottom:10px;color:#9aa0b4;font-size:14px;cursor:pointer}
#authModal .lg-eye:hover{color:#a24fc4}
#authModal .lg-forgot{align-self:flex-start;margin:-6px 0 20px;font-size:12px;color:#7d5fc7;text-decoration:none}
#authModal .lg-forgot:hover{text-decoration:underline}
#authModal .lg-btn{align-self:flex-start;margin:0;padding:11px 36px;border:0;border-radius:999px;background:#a24fc4;color:#fff;font-family:'Alexandria',sans-serif;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 8px 18px rgba(162,79,196,.35);transition:transform .2s,background .2s}
#authModal .lg-btn:hover{background:#8e3fb0;transform:translateY(-2px)}

#authModal .lg-or{display:flex;align-items:center;gap:10px;margin:22px 0 14px;font-size:12px;color:#8b8fa3}
#authModal .lg-or::before,#authModal .lg-or::after{content:'';flex:1;height:1px;background:#e3e5ee}
#authModal .lg-google{display:flex;justify-content:flex-start;min-height:44px}
#authModal .lg-status{min-height:16px;margin-top:6px;font-size:12px;color:#7d5fc7}
#authModal .lg-signup{margin:auto 0 0;padding-top:16px;font-size:11.5px;color:#4a4f6a}
#authModal .lg-signup a{color:#a24fc4;font-weight:700;text-decoration:underline}

#authModal .lg-close{position:absolute;top:14px;inset-inline-end:14px;z-index:5;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.92);color:#1b1464;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer;display:flex;align-items:center;justify-content:center}
#authModal .lg-close:hover{background:#fff;color:#a24fc4}

#authModal .lg-art{position:absolute;top:0;bottom:0;inset-inline-end:0;width:62%;background:#3b1d8f;-webkit-mask-image:${MASK_LTR};mask-image:${MASK_LTR};-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}
html[dir="rtl"] #authModal .lg-art{-webkit-mask-image:${MASK_RTL};mask-image:${MASK_RTL}}
#authModal .lg-art{display:flex;align-items:center;justify-content:flex-end;padding-inline-end:9%;box-sizing:border-box;overflow:hidden}
#authModal .lg-art-bg{position:absolute;inset:-40px;background-size:cover;background-position:center;filter:blur(28px) saturate(1.2) brightness(.8)}
#authModal .lg-art-img{position:relative;z-index:1;display:block;width:min(300px,56%);height:auto;border-radius:20px;box-shadow:0 18px 40px rgba(10,5,40,.55)}

@media (max-width:720px){
  #authModal .lg-card{flex-direction:column;min-height:0;max-width:440px}
  #authModal .lg-form-side{flex:none;max-width:100%;padding:26px 26px 22px}
  #authModal .lg-dot{margin-bottom:20px}
  #authModal .lg-brand{margin-bottom:24px;font-size:28px}
  #authModal .lg-art,html[dir="rtl"] #authModal .lg-art{position:relative;order:-1;inset:auto;width:100%;height:150px;padding:0;justify-content:center;-webkit-mask-image:none;mask-image:none}
  #authModal .lg-art-img{width:auto;height:124px}
}`;

  var HTML = `
<div class="lg-card" role="dialog" aria-modal="true" aria-labelledby="lgTitle">
  <button type="button" class="lg-close" onclick="closeAuthModal()" aria-label="إغلاق"><i class="fa-solid fa-xmark"></i></button>

  <div class="lg-form-side">
    <span class="lg-dot"></span>
    <p class="lg-welcome" data-translate="login-welcome">مرحباً بك في</p>
    <h2 class="lg-brand" id="lgTitle">MOVEXA TV</h2>

    <form class="lg-form" onsubmit="handleEmailLogin(event)">
      <div class="lg-field">
        <label for="loginEmailInput" data-translate="login-email-label">البريد الإلكتروني</label>
        <input type="email" id="loginEmailInput" autocomplete="email" required>
      </div>
      <div class="lg-field">
        <label for="loginPassInput" data-translate="login-pass-label">كلمة المرور</label>
        <input type="password" id="loginPassInput" autocomplete="current-password" required>
        <i class="fa-solid fa-eye-slash lg-eye" id="togglePasswordBtn" onclick="togglePasswordVisibility()"></i>
      </div>
      <a href="#" class="lg-forgot" onclick="forgotPasswordAction(); return false;" data-translate="login-forgot">نسيت كلمة المرور؟</a>
      <button type="submit" class="lg-btn" data-translate="login-modal-title">تسجيل الدخول</button>
    </form>

    <div class="lg-or"><span data-translate="login-or">أو سجّل عبر</span></div>
    <div id="googleSignInContainer" class="lg-google"></div>
    <div id="googleStatus" class="lg-status"></div>

    <p class="lg-signup">
      <span data-translate="login-no-account">ليس لديك حساب؟</span>
      <a href="#" onclick="lgSignup(); return false;" data-translate="login-signup">أنشئ حساباً</a>
    </p>
  </div>

  <div class="lg-art" aria-hidden="true">
    <div class="lg-art-bg" style="background-image:url('${IMG}')"></div>
    <img class="lg-art-img" src="${IMG}" alt="" loading="lazy">
  </div>
</div>`;

  function setStatus(msg) {
    var el = document.getElementById('googleStatus');
    if (el) el.textContent = msg;
  }

  // نفس منطق Google الأصلي، بس عرض الزر يتكيّف مع عرض البطاقة الجديدة
  function renderGoogle(tries) {
    var container = document.getElementById('googleSignInContainer');
    if (!container) return;
    tries = tries || 0;

    if (typeof initGoogleSignIn !== 'function' || !initGoogleSignIn()) {
      if (tries > 20) {
        setStatus('تعذّر تحميل خدمة Google. تأكد من الإنترنت ومن أنك تفتح الموقع من سيرفر.');
        return;
      }
      setStatus('جاري تحميل خدمة Google...');
      setTimeout(function () { renderGoogle(tries + 1); }, 300);
      return;
    }

    setStatus('');
    container.innerHTML = '';
    var w = Math.max(200, Math.min(300, container.clientWidth || 280));
    google.accounts.id.renderButton(container, {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      shape: 'pill',
      width: w,
      locale: (typeof currentLang !== 'undefined' && currentLang === 'ar') ? 'ar' : 'en'
    });
  }

  function install() {
    var modal = document.getElementById('authModal');
    if (!modal) return;

    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    modal.innerHTML = HTML;

    window.renderGoogleButton = function () { renderGoogle(0); };

    // إنشاء الحساب يتم تلقائياً عند أول دخول بـ Google
    window.lgSignup = function () {
      showToast(currentLang === 'ar'
        ? 'أنشئ حسابك بنقرة واحدة عبر Google'
        : 'Create your account in one click with Google');
      var g = document.getElementById('googleSignInContainer');
      if (g && g.scrollIntoView) g.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install);
  } else {
    install();
  }
})();