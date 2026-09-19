let currentLang = 'ar';

        const translations = {
            ar: {
                "nav-home": "الصفحة الرئيسية",
                "nav-packages": "الباقات",
                "nav-blog": "المدونة",
                "nav-contact": "اتصل بنا",
                "section-filter": "الأقسام",
                "share-fb": "فيسبوك",
                "share-wa": "واتساب",
                "share-copy": "نسخ الرابط",
                "share-tw": "تويتر",
                "logout-btn": "تسجيل الخروج",
                "login-modal-title": "تسجيل الدخول بالبريد الإلكتروني",
                "login-modal-sub": "سجّل دخولك للمتابعة والوصول إلى حسابك في MOVEXA TV.",
                "login-email-placeholder": "البريد الإلكتروني",
                "login-pass-placeholder": "كلمة المرور",
                "login-forgot": "نسيت كلمة المرور؟",
                "login-btn-action": "ابدأ الآن",
                "login-or": "أو تسجيل الدخول عبر",
                "login-google-btn": "المتابعة باستخدام Google",
                "hero-kicker": "ترفيه بلا حدود",
                "hero-title": "أفضل تطبيق بث مباشر",
                "hero-subtitle": "شاهد آلاف القنوات والأفلام والمسلسلات بجودة عالية",
                "hero-primary-btn": "استكشف الباقات",
                "hero-secondary-btn": "تواصل معنا",
                "features-heading": "لماذا تختار MOVEXA TV؟",
                "feat6-title": "محتوى حصري",
                "feat6-desc": "افتح الوصول إلى أفلام وحلقات حصرية أولاً بأول.",
                "feat2-title": "قنوات عالمية",
                "feat2-desc": "آلاف القنوات من جميع أنحاء العالم بلغات متعددة.",
                "feat1-title": "جودة عالية",
                "feat1-desc": "بث بدقة 4K وتقنيات ترميز حديثة لأفضل تجربة مشاهدة.",
                "feat4-title": "متعدد الأجهزة",
                "feat4-desc": "شاهد على الهاتف والتابلت والتلفاز والكمبيوتر.",
                "feat3-title": "أمان عالي",
                "feat3-desc": "تشفير من الدرجة الأولى وحماية خصوصيتك مضمونة.",
                "feat5-title": "دعم فني 24/7",
                "feat5-desc": "فريق دعم متخصص جاهز للمساعدة في أي وقت.",
                "badge-free": "مجاني",
                "free-title": "النسخة المجانية",
                "free-desc": "جميع القنوات المجانية والأساسية بجودة ممتازة",
                "download-now-btn": "تحميل",
                "pkg-hero-title": "اختر الباقة المناسبة لك",
                "pkg-hero-sub": "خطط مختلفة لتناسب احتياجات الجميع",
                "pkg-heading": "باقاتنا المتاحة",
                "pkg1-ribbon": "الأساسية",
                "pkg1-title": "الباقة المميزة",
                "per-month": " / شهريا",
                "per-year": " / سنويا",
                "per-3months": " / 3 أشهر",
                "p1-f1": "أكثر من 500 قناة",
                "p1-f2": "جودة 720p",
                "p1-f3": "إعلانات محدودة",
                "p1-f4": "2 جهاز متزامن",
                "pay-by-card": "ادفع بالبطاقة",
                "subscribe-now": "اشترك الآن",
                "pkg2-ribbon": "الأكثر شهرة",
                "pkg2-title": "الباقة البريميوم",
                "p2-f1": "آلاف القنوات",
                "p2-f2": "جودة 4K",
                "p2-f3": "بدون إعلانات",
                "p2-f4": "5 أجهزة متزامنة",
                "p2-f5": "محتوى حصري",
                "pkg3-ribbon": "للعائلة",
                "pkg3-title": "الباقة العائلية",
                "p3-f1": "جميع قنوات بريميوم",
                "p3-f2": "جودة 4K",
                "p3-f3": "بدون إعلانات",
                "p3-f4": "10 أجهزة متزامنة",
                "p3-f5": "محتوى عائلي آمن",
                "blog-hero-title": "مدونة MOVEXA TV",
                "blog-hero-sub": "تابع أحدث المقالات، الأخبار، والتحديثات التقنية حول البث الرقمي",
                "blog-heading": "أحدث المقالات",
                "b5-date": "16 أغسطس 2026",
                "b5-title": "اشتراكات وبطاقات نتفليكس الرسمية عبر منصة MOVEXA TV",
                "b5-desc": "استمتع بمشاهدة أضخم مسلسلات وأفلام نتفليكس العالمية بأعلى دقة ووضوح مع توفر بطاقات الاشتراك الفورية والآمنة.",
                "read-more": "اقرأ المزيد",
                "b4-date": "16 أغسطس 2026",
                "b4-title": "تفعيل بطاقات شاهد VIP الأصلية على منصة MOVEXA TV",
                "b4-desc": "احصل على اشتراكات وبطاقات شاهد VIP الرسمية واستمتع بأضخم الإنتاجات العربية والعالمية الحصرية بأفضل الأسعار.",
                "b1-date": "15 أغسطس 2026",
                "b1-title": "كيف تشاهد قنوات 4K بث مباشر بدون تقطيع؟",
                "b1-desc": "تعرف على أهم النصائح والإعدادات الشبكية لضمان تجربة مشاهدة سينمائية فائقة الوضوح ومنزلية خالية من أي انقطاع.",
                "b3-date": "01 أغسطس 2026",
                "b3-title": "أهم الأفلام والمسلسلات الحصرية القادمة هذا الشهر",
                "b3-desc": "دليلك الكامل لأحدث العروض السينمائية والمسلسلات العالمية التي تم إضافتها مؤخراً لمكتبة بريميوم الخاصة بنا.",
                "trial-banner-title": "يمكنكم التواصل معنا للحصول على اشتراك MOVEXA TV تجريبي 24 ساعة",
                "trial-banner-desc": "من خلال الزر التالي يمكنكم التواصل معنا مباشرة عبر واتس اب لطلب تجربة اشتراك MOVEXA TV مجانية 24 ساعة، وبالتالي يمكنكم إختبار الخدمة على شبكة الإنترنت لديكم",
                "trial-btn-text": "تواصل معنا",
                "contact-hero-title": "تواصل معنا",
                "contact-hero-sub": "نحن هنا لمساعدتك وسماع آرائك",
                "contact-heading": "طرق التواصل",
                "c-phone": "الهاتف",
                "c-phone-sub": "اتصل بنا مباشرة",
                "c-email": "البريد الإلكتروني",
                "c-email-sub": "أرسل لنا بريدك",
                "c-wa": "واتساب",
                "c-wa-sub": "تواصل عبر واتساب",
                "c-click": "اضغط هنا",
                "c-time": "أوقات العمل",
                "c-time-sub": "طيلة أيام الأسبوع",
                "f-about-title": "عن MOVEXA TV",
                "f-about-1": "من نحن",
                "f-about-2": "مميزاتنا",
                "f-about-3": "الأسعار",
                "f-about-4": "المدونة",
                "f-help-title": "المساعدة",
                "f-help-1": "الأسئلة الشائعة",
                "f-help-2": "الدعم الفني",
                "f-help-3": "التحديثات",
                "f-help-4": "المساعدة",
                "f-legal-title": "القانوني",
                "f-legal-1": "شروط الخدمة",
                "f-legal-2": "سياسة الخصوصية",
                "f-legal-3": "ملفات تعريف الارتباط",
                "f-legal-4": "الترخيص",
                "f-rights": "© 2026 MOVEXA TV. جميع الحقوق محفوظة. تم التطوير بعناية لك.",
                "wa-rotate-text": "للتواصل معنا للاستفسار أكثر * للتواصل معنا للاستفسار أكثر *"
            },
            en: {
                "nav-home": "Home",
                "nav-packages": "Packages",
                "nav-blog": "Blog",
                "nav-contact": "Contact Us",
                "section-filter": "Sections",
                "share-fb": "Facebook",
                "share-wa": "WhatsApp",
                "share-copy": "Copy Link",
                "share-tw": "Twitter",
                "logout-btn": "Logout",
                "login-modal-title": "Email Login",
                "login-modal-sub": "Sign in to continue and access your account on MOVEXA TV.",
                "login-email-placeholder": "Email Address",
                "login-pass-placeholder": "Password",
                "login-forgot": "Forgot password?",
                "login-btn-action": "Get Started",
                "login-or": "Or sign in with",
                "login-google-btn": "Continue with Google",
                "hero-kicker": "Entertainment without limits",
                "hero-title": "Best Live Streaming App",
                "hero-subtitle": "Watch thousands of channels, movies, and series in high quality",
                "hero-primary-btn": "Explore Plans",
                "hero-secondary-btn": "Contact Us",
                "features-heading": "Why Choose MOVEXA TV?",
                "feat6-title": "Exclusive Content",
                "feat6-desc": "Get instant access to exclusive movies and episodes.",
                "feat2-title": "Global Channels",
                "feat2-desc": "Thousands of channels worldwide in multiple languages.",
                "feat1-title": "High Quality",
                "feat1-desc": "4K streaming with modern encoding for the best viewing experience.",
                "feat4-title": "Multi-Device",
                "feat4-desc": "Watch on phone, tablet, TV, and PC.",
                "feat3-title": "High Security",
                "feat3-desc": "Top-tier encryption and guaranteed privacy protection.",
                "feat5-title": "24/7 Support",
                "feat5-desc": "Dedicated support team ready to assist anytime.",
                "badge-free": "Free",
                "free-title": "Free Version",
                "free-desc": "All free and basic channels in excellent quality",
                "download-now-btn": "Download",
                "pkg-hero-title": "Choose the Right Plan for You",
                "pkg-hero-sub": "Flexible plans to suit everyone's needs",
                "pkg-heading": "Our Available Plans",
                "pkg1-ribbon": "Basic",
                "pkg1-title": "Special Package",
                "per-month": " / Monthly",
                "per-year": " / Yearly",
                "per-3months": " / 3 Months",
                "p1-f1": "500+ Channels",
                "p1-f2": "720p Quality",
                "p1-f3": "Limited Ads",
                "p1-f4": "2 Concurrent Devices",
                "pay-by-card": "Pay by Card",
                "subscribe-now": "Subscribe Now",
                "pkg2-ribbon": "Most Popular",
                "pkg2-title": "Premium Package",
                "p2-f1": "Thousands of Channels",
                "p2-f2": "4K Quality",
                "p2-f3": "Ad-Free",
                "p2-f4": "5 Concurrent Devices",
                "p2-f5": "Exclusive Content",
                "pkg3-ribbon": "Family",
                "pkg3-title": "Family Package",
                "p3-f1": "All Premium Channels",
                "p3-f2": "4K Quality",
                "p3-f3": "Ad-Free",
                "p3-f4": "10 Concurrent Devices",
                "p3-f5": "Safe Family Content",
                "blog-hero-title": "MOVEXA TV Blog",
                "blog-hero-sub": "Follow the latest articles, news, and technical updates about digital streaming",
                "blog-heading": "Latest Articles",
                "b5-date": "August 16, 2026",
                "b5-title": "Official Netflix Subscriptions and Cards via MOVEXA TV",
                "b5-desc": "Enjoy watching the biggest global Netflix series and movies in highest clarity with instant and safe subscription cards.",
                "read-more": "Read More",
                "b4-date": "August 16, 2026",
                "b4-title": "Activating Official Shahid VIP Cards on MOVEXA TV",
                "b4-desc": "Get official Shahid VIP subscriptions and cards and enjoy top exclusive Arabic and international productions at best prices.",
                "b1-date": "August 15, 2026",
                "b1-title": "How to Watch 4K Channels Live Without Lag?",
                "b1-desc": "Learn key tips and network settings to ensure a seamless home cinematic viewing experience.",
                "b3-date": "August 01, 2026",
                "b3-title": "Top Exclusive Movies and Series Coming This Month",
                "b3-desc": "Your complete guide to the latest cinematic releases and international series recently added to our premium library.",
                "trial-banner-title": "Contact us to get a 24-hour MOVEXA TV trial subscription",
                "trial-banner-desc": "Click the button below to contact us via WhatsApp for a free 24-hour MOVEXA TV trial and test the service on your network",
                "trial-btn-text": "Contact Us",
                "contact-hero-title": "Contact Us",
                "contact-hero-sub": "We are here to help and hear your feedback",
                "contact-heading": "Contact Methods",
                "c-phone": "Phone",
                "c-phone-sub": "Call us directly",
                "c-email": "Email",
                "c-email-sub": "Send us an email",
                "c-wa": "WhatsApp",
                "c-wa-sub": "Chat via WhatsApp",
                "c-click": "Click Here",
                "c-time": "Working Hours",
                "c-time-sub": "All days of the week",
                "f-about-title": "About MOVEXA TV",
                "f-about-1": "About Us",
                "f-about-2": "Features",
                "f-about-3": "Pricing",
                "f-about-4": "Blog",
                "f-help-title": "Help",
                "f-help-1": "FAQ",
                "f-help-2": "Technical Support",
                "f-help-3": "Updates",
                "f-help-4": "Help",
                "f-legal-title": "Legal",
                "f-legal-1": "Terms of Service",
                "f-legal-2": "Privacy Policy",
                "f-legal-3": "Cookies",
                "f-legal-4": "Licensing",
                "f-rights": "© 2026 MOVEXA TV. All rights reserved. Developed with care for you.",
                "wa-rotate-text": "Contact us for more info * Contact us for more info *"
            }
        };

        function applyTranslations(lang) {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = translations[lang][key];
                    } else {
                        el.textContent = translations[lang][key];
                    }
                }
            });
        }

        document.addEventListener("DOMContentLoaded", function() {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                const updateNavbarState = () => {
                    navbar.classList.toggle('is-scrolled', window.scrollY > 36);
                };

                updateNavbarState();
                window.addEventListener('scroll', updateNavbarState, { passive: true });
            }

            const cursorFollower = document.getElementById('cursorFollower');
            const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

            if (cursorFollower && canUseCustomCursor) {
                document.addEventListener('mousemove', (event) => {
                    cursorFollower.style.transform = `translate3d(${event.clientX - 9}px, ${event.clientY - 9}px, 0)`;
                    cursorFollower.classList.add('is-visible');
                });

                document.addEventListener('mouseleave', () => {
                    cursorFollower.classList.remove('is-visible');
                });

                document.querySelectorAll('a, button, [role="button"], .navbar-icons i, .feature-card, .package-card, .blog-card, .contact-card').forEach((element) => {
                    element.addEventListener('mouseenter', () => cursorFollower.classList.add('is-hovering'));
                    element.addEventListener('mouseleave', () => cursorFollower.classList.remove('is-hovering'));
                });
            }

            const welcomeScreen = document.getElementById('welcomeScreen');
            if (welcomeScreen) {
                window.setTimeout(() => {
                    welcomeScreen.classList.add('is-hidden');
                    window.setTimeout(() => welcomeScreen.remove(), 700);
                }, 2400);
            }

            const slides = document.querySelectorAll('#heroSlider .hero-bg-slide');
            if(slides.length > 0) {
                let currentSlide = 0;
                setInterval(() => {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }, 5000);
            }

            const cards = document.querySelectorAll('.feature-card, .package-card, .blog-card, .download-card, .contact-card');

            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = -((y - centerY) / centerY) * 12;
                    const rotateY = ((x - centerX) / centerX) * 12;

                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
                    card.style.transition = 'transform 0.5s ease';
                });

                card.addEventListener('mouseenter', () => {
                    card.style.transition = 'none';
                });
            });
        });

        function showPage(pageName) {
            document.getElementById('page-home').style.display = 'none';
            document.getElementById('page-packages').style.display = 'none';
            document.getElementById('page-blog').style.display = 'none';
            document.getElementById('page-contact').style.display = 'none';

            document.getElementById('nav-home').classList.remove('active');
            document.getElementById('nav-packages').classList.remove('active');
            document.getElementById('nav-blog').classList.remove('active');
            document.getElementById('nav-contact').classList.remove('active');

            if (pageName === 'home') {
                document.getElementById('page-home').style.display = 'block';
                document.getElementById('nav-home').classList.add('active');
            } else if (pageName === 'packages') {
                document.getElementById('page-packages').style.display = 'block';
                document.getElementById('nav-packages').classList.add('active');
            } else if (pageName === 'blog') {
                document.getElementById('page-blog').style.display = 'block';
                document.getElementById('nav-blog').classList.add('active');
            } else if (pageName === 'contact') {
                document.getElementById('page-contact').style.display = 'block';
                document.getElementById('nav-contact').classList.add('active');
            }

            closeMobileMenu();
            closeSectionFilter();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function toggleSectionFilter() {
            const menu = document.getElementById('sectionFilterMenu');
            const toggle = document.querySelector('.section-filter-toggle');
            if (!menu || !toggle) return;
            const isOpen = menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        }

        function closeSectionFilter() {
            const menu = document.getElementById('sectionFilterMenu');
            const toggle = document.querySelector('.section-filter-toggle');
            if (menu) menu.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }

        function toggleMobileMenu() {
            const navMenu = document.getElementById('navbarMenu');
            const overlay = document.getElementById('mobileOverlay');
            if (navMenu.classList.contains('mobile-open')) {
                navMenu.classList.remove('mobile-open');
                overlay.style.display = 'none';
            } else {
                navMenu.classList.add('mobile-open');
                overlay.style.display = 'block';
            }
        }

        function closeMobileMenu() {
            const navMenu = document.getElementById('navbarMenu');
            const overlay = document.getElementById('mobileOverlay');
            if (navMenu) navMenu.classList.remove('mobile-open');
            if (overlay) overlay.style.display = 'none';
        }

        function showToast(message) {
            const toast = document.getElementById('toast-notification');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function toggleWhatsappReveal() {
            const wrapper = document.getElementById('whatsappFloatWrapper');
            wrapper.classList.toggle('show');
        }

        function toggleShareMenu() {
            const shareMenu = document.getElementById('shareMenu');
            shareMenu.classList.toggle('show');
        }

        function copyWebsiteLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast(currentLang === 'ar' ? 'تم نسخ رابط الموقع بنجاح!' : 'Website link copied!');
            });
        }

        function handleUserIconClick(event) {
            const modal = document.getElementById('authModal');
            modal.style.display = 'flex';
        }

        function closeAuthModal() {
            document.getElementById('authModal').style.display = 'none';
        }

        function togglePasswordVisibility() {
            const passInput = document.getElementById('loginPassInput');
            const icon = document.getElementById('togglePasswordBtn');
            if (passInput.type === 'password') {
                passInput.type = 'text';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                passInput.type = 'password';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            }
        }

        function forgotPasswordAction() {
            showToast(currentLang === 'ar' ? 'تم إرسال تعليمات إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.' : 'Password reset instructions sent to your email.');
        }

        function handleEmailLogin(event) {
            event.preventDefault();
            closeAuthModal();
            showToast(currentLang === 'ar' ? 'تم تسجيل الدخول بنجاح!' : 'Logged in successfully!');
        }

        function loginWithGoogle() {
            closeAuthModal();
            showToast(currentLang === 'ar' ? 'جاري تسجيل الدخول بواسطة Google...' : 'Logging in with Google...');
        }

        function performLogout() {
            document.getElementById('userDropdownMenu').classList.remove('show');
            showToast(currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح.' : 'Logged out successfully.');
        }

        function toggleLanguage() {
            currentLang = (currentLang === 'ar') ? 'en' : 'ar';
            const htmlRoot = document.getElementById('html-root');
            htmlRoot.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
            htmlRoot.lang = currentLang;

            applyTranslations(currentLang);

            showToast(currentLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English');
        }

        function startDownloadCountdown(btn, downloadUrl) {
            if (btn.classList.contains('counting')) return;
            btn.classList.add('counting');
            btn.style.pointerEvents = 'none';

            let count = 10;
            const btnText = btn.querySelector('.btn-text');
            const originalText = btnText.textContent;

            const timer = setInterval(() => {
                btnText.textContent = (currentLang === 'ar' ? 'جاري التحضير... ' : 'Preparing... ') + count;
                count--;

                if (count < 0) {
                    clearInterval(timer);
                    btnText.textContent = originalText;
                    btn.classList.remove('counting');
                    btn.style.pointerEvents = 'auto';
                    window.open(downloadUrl, '_blank');
                }
            }, 1000);
        }

        // Keep inline HTML handlers compatible with the module script.
        Object.assign(window, {
            showPage,
            toggleMobileMenu,
            closeMobileMenu,
            showToast,
            toggleWhatsappReveal,
            toggleShareMenu,
            copyWebsiteLink,
            handleUserIconClick,
            closeAuthModal,
            togglePasswordVisibility,
            forgotPasswordAction,
            handleEmailLogin,
            loginWithGoogle,
            performLogout,
            toggleLanguage,
            startDownloadCountdown,
            toggleSectionFilter,
            closeSectionFilter
        });
