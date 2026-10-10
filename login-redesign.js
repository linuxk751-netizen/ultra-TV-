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

/* =====================================================================
   جدار الأفلام والمسلسلات المتحرك (خلفية الـ Hero)
   لإضافة صور أفلامك ومسلسلاتك: حط روابطها داخل القائمة POSTERS تحت.
   (استخدم صور عندك حق استخدامها؛ البوسترات الرسمية محمية بحقوق النشر)
   ===================================================================== */
(function () {
  var POSTERS = [
    'https://images.unsplash.com/photo-1536440136628-849c177e76a1',
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26',
    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85',
    'https://images.unsplash.com/photo-1594909122845-11baa439b7bf'
    // ,'https://i.ibb.co/xxxx/poster1.jpg'   <- أضف صورك هون
  ];
  var HIDE_OLD_SLIDES = true;   // false = خلّي سلايدر الصور القديم ظاهر
  var COLS = 8, PER_COL = 9;
  var GRADS = [['#3b1d8f', '#ba55d3'], ['#1a1033', '#f5c518'], ['#2a0f4d', '#8a2be2'],
               ['#0f172a', '#ba55d3'], ['#4a1d6b', '#f5c518'], ['#12091f', '#7c3aed']];

  var CSS = `
.hero .mw-wall{position:absolute;inset:0;overflow:hidden;z-index:0;pointer-events:none;background:#07060c}
.mw-wall::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(7,6,12,.35) 0%,rgba(7,6,12,.85) 100%),linear-gradient(to bottom,rgba(7,6,12,.5),rgba(7,6,12,.15) 40%,#07060c 100%)}
.mw-stage{position:absolute;left:50%;top:50%;width:150%;height:190%;transform:translate(-50%,-50%) rotate(-10deg);display:flex;justify-content:center;gap:14px}
.mw-col{flex:none;width:clamp(110px,13vw,170px)}
.mw-track{animation:mwUp var(--d,80s) linear infinite;animation-delay:calc(var(--o,0) * -1s);will-change:transform}
.mw-col:nth-child(even) .mw-track{animation-name:mwDown}
.mw-col:nth-child(3n) .mw-track{--d:60s}
.mw-col:nth-child(5n) .mw-track{--d:105s}
.mw-tile{position:relative;width:100%;aspect-ratio:2/3;margin-bottom:14px;border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 10px 24px rgba(0,0,0,.5)}
.mw-tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.mw-ico{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;color:rgba(255,255,255,.25)}
@keyframes mwUp{from{transform:translateY(0)}to{transform:translateY(-50%)}}
@keyframes mwDown{from{transform:translateY(-50%)}to{transform:translateY(0)}}
@media (max-width:700px){.mw-col:nth-child(n+5){display:none}}
@media (prefers-reduced-motion:reduce){.mw-track{animation:none}}
${HIDE_OLD_SLIDES ? '.hero .hero-bg-slide{display:none!important}' : ''}`;

  function tile(src, g) {
    return '<div class="mw-tile" style="background:linear-gradient(160deg,' + g[0] + ',' + g[1] + ')">' +
      '<i class="fa-solid fa-film mw-ico"></i>' +
      (src ? '<img src="' + src + '?q=70&w=320&h=480&fit=crop&auto=format" alt="" loading="lazy" onerror="this.remove()">' : '') +
      '</div>';
  }

  function column(ci) {
    var set = '';
    for (var i = 0; i < PER_COL; i++) {
      var src = (POSTERS.length && (i + ci) % 2 === 0) ? POSTERS[(ci * 3 + i) % POSTERS.length] : '';
      set += tile(src, GRADS[(ci * 2 + i) % GRADS.length]);
    }
    return '<div class="mw-col"><div class="mw-track" style="--o:' + (ci * 9) + '">' + set + set + '</div></div>';
  }

  function build() {
    var heroes = document.querySelectorAll('section.hero');
    if (!heroes.length) return;

    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var cols = '';
    for (var c = 0; c < COLS; c++) cols += column(c);

    heroes.forEach(function (hero) {
      if (getComputedStyle(hero).position === 'static') hero.style.position = 'relative';

      // نتأكد إن محتوى الـ Hero فوق الجدار
      Array.prototype.forEach.call(hero.children, function (ch) {
        var cs = getComputedStyle(ch);
        if (cs.position === 'static') ch.style.position = 'relative';
        var z = parseInt(cs.zIndex, 10);
        if (isNaN(z) || z < 1) ch.style.zIndex = '1';
      });

      var wall = document.createElement('div');
      wall.className = 'mw-wall';
      wall.setAttribute('aria-hidden', 'true');
      wall.innerHTML = '<div class="mw-stage">' + cols + '</div>';
      hero.insertBefore(wall, hero.firstChild);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();

/* =====================================================================
   سلايدر الخلفية: صورتين بتتبدل، ومع كل صورة بيطلع كلام بألوان الموقع
   عدّل الكلام والصور من القائمة SLIDES تحت.
   ===================================================================== */
(function () {
  var SLIDES = [
    {
      img: 'https://i.ibb.co/bgq9XF2t/pngtree-experience-artful-cinema-from-home-enjoy-popcorn-3d-glasses-and-film-image-3726475.jpg',
      badge: 'سينما في بيتك',
      title: 'استمتع بالأفلام كأنك في السينما',
      text: 'أحدث الأفلام العالمية بجودة 4K وصوت نقي على شاشتك.'
    },
    {
      img: 'https://i.ibb.co/ynmMyT2P/Gemini-Generated-Image-9mk9ci9mk9ci9mk9.jpg',
      badge: 'مسلسلات بلا حدود',
      title: 'مسلسلاتك المفضلة بمكان واحد',
      text: 'آلاف الحلقات العربية والأجنبية، وبتنضاف الجديدة كل أسبوع.'
    }
  ];
  var INTERVAL = 6000;   // مدة كل صورة (ميلي ثانية)

  var CSS = `
.mw-show{position:absolute;inset:0;overflow:hidden;z-index:1;pointer-events:none}
.mw-show::after{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(7,6,12,.2) 0%,rgba(7,6,12,.75) 100%),linear-gradient(to bottom,rgba(7,6,12,.45),transparent 35%,#07060c 100%)}
.mw-slide{position:absolute;inset:0}
.mw-bg{position:absolute;inset:-4%;background-size:cover;background-position:center;filter:blur(3px) brightness(.6) saturate(1.15);opacity:0;transition:opacity 1.4s ease;animation:mwKB 16s ease-in-out infinite alternate}
.mw-slide.on .mw-bg{opacity:.65}
@keyframes mwKB{from{transform:scale(1.04)}to{transform:scale(1.14)}}

.mw-frame{position:absolute;top:50%;inset-inline-end:5%;z-index:2;width:clamp(170px,19vw,280px);border-radius:18px;overflow:hidden;border:1px solid rgba(245,197,24,.45);box-shadow:0 24px 50px rgba(0,0,0,.65),0 0 40px rgba(186,85,211,.35);opacity:0;transform:translateY(-46%) rotate(0deg) scale(.94);transition:opacity 1s ease .3s,transform 1.2s cubic-bezier(.16,1,.3,1) .3s}
.mw-frame img{display:block;width:100%;height:auto}
.mw-slide.on .mw-frame{opacity:1;transform:translateY(-50%) rotate(3deg) scale(1)}

.mw-cap{position:absolute;bottom:34px;inset-inline-start:5%;z-index:3;max-width:min(430px,82%);text-align:start}
.mw-cap > *{opacity:0;transform:translateY(18px);filter:blur(6px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1),filter .9s}
.mw-slide.on .mw-cap > *{opacity:1;transform:none;filter:none}
.mw-slide.on .mw-cap > :nth-child(1){transition-delay:.45s}
.mw-slide.on .mw-cap > :nth-child(2){transition-delay:.65s}
.mw-slide.on .mw-cap > :nth-child(3){transition-delay:.85s}
.mw-badge{display:inline-flex;align-items:center;gap:8px;margin:0 0 10px;padding:5px 14px;border-radius:20px;font-family:'Alexandria',sans-serif;font-size:12px;font-weight:700;color:#f5c518;background:rgba(245,197,24,.12);border:1px solid rgba(245,197,24,.35)}
.mw-title{margin:0 0 8px;font-family:'Alexandria',sans-serif;font-size:24px;font-weight:800;line-height:1.4;background:linear-gradient(135deg,#fff 0%,#f5c518 55%,#ba55d3 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 25px rgba(245,197,24,.25)}
.mw-text{margin:0;font-family:'Readex Pro',sans-serif;font-size:14px;line-height:1.8;color:#c8cbd8}

.mw-dots{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);z-index:4;display:flex;gap:8px;pointer-events:auto}
.mw-dot{width:9px;height:9px;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.35);cursor:pointer;transition:all .35s}
.mw-dot.on{width:26px;border-radius:6px;background:#f5c518;box-shadow:0 0 10px rgba(245,197,24,.6)}

@media (max-width:1200px){.mw-frame{display:none}}
@media (max-width:768px){.mw-title{font-size:19px}.mw-cap{bottom:44px}}
@media (prefers-reduced-motion:reduce){.mw-bg{animation:none}}`;

  function build() {
    var hero = document.getElementById('heroSlider') || document.querySelector('section.hero');
    if (!hero || !SLIDES.length) return;

    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var html = '', dots = '';
    SLIDES.forEach(function (s, i) {
      html += '<div class="mw-slide">' +
        '<div class="mw-bg" style="background-image:url(\'' + s.img + '\')"></div>' +
        '<div class="mw-frame"><img src="' + s.img + '" alt=""></div>' +
        '<div class="mw-cap">' +
          '<span class="mw-badge"><i class="fa-solid fa-clapperboard"></i> ' + s.badge + '</span>' +
          '<h3 class="mw-title">' + s.title + '</h3>' +
          '<p class="mw-text">' + s.text + '</p>' +
        '</div></div>';
      dots += '<button type="button" class="mw-dot" aria-label="slide ' + (i + 1) + '"></button>';
    });

    var show = document.createElement('div');
    show.className = 'mw-show';
    show.innerHTML = html + '<div class="mw-dots">' + dots + '</div>';

    var wall = hero.querySelector('.mw-wall');
    hero.insertBefore(show, wall ? wall.nextSibling : hero.firstChild);

    var slides = show.querySelectorAll('.mw-slide');
    var dotEls = show.querySelectorAll('.mw-dot');
    var cur = -1, timer = null;

    function go(i) {
      cur = (i + slides.length) % slides.length;
      slides.forEach(function (el, k) { el.classList.toggle('on', k === cur); });
      dotEls.forEach(function (el, k) { el.classList.toggle('on', k === cur); });
    }
    function start() {
      clearInterval(timer);
      if (slides.length > 1) timer = setInterval(function () { go(cur + 1); }, INTERVAL);
    }

    dotEls.forEach(function (d, k) {
      d.addEventListener('click', function () { go(k); start(); });
    });

    SLIDES.forEach(function (s) { var im = new Image(); im.src = s.img; });  // تحميل مسبق
    go(0);
    start();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();