const fs = require('fs');
const path = 'index.html';
const text = fs.readFileSync(path, 'utf8');
const marker = '// Reviews logic - localStorage based prototype';
const start = text.indexOf(marker);
if (start === -1) throw new Error('marker not found');
const blockStart = text.lastIndexOf('<script>', start);
const blockEnd = text.indexOf('</script>', start);
if (blockStart === -1 || blockEnd === -1) throw new Error('script bounds not found');
const newBlock = `    <script>
        const CONTACT_REVIEW_KEY = 'contact-reviews';
        const reviewName = document.getElementById('reviewName');
        const reviewText = document.getElementById('reviewText');
        const ratingStars = Array.from(document.querySelectorAll('#ratingStars .star'));
        const submitReview = document.getElementById('submitReview');
        const contactReviewsList = document.getElementById('contactReviewsList');
        const reviewAverage = document.getElementById('reviewAverage');
        const reviewAverageStars = document.getElementById('reviewAverageStars');
        const reviewCount = document.getElementById('reviewCount');
        let currentRating = 0;

        function loadContactReviews() {
            try {
                return JSON.parse(localStorage.getItem(CONTACT_REVIEW_KEY) || '[]');
            } catch (e) {
                return [];
            }
        }

        function saveContactReviews(reviews) {
            localStorage.setItem(CONTACT_REVIEW_KEY, JSON.stringify(reviews));
        }

        function escapeHtml(text) {
            return String(text || '').replace(/[&"'<>]/g, c => ({
                '&': '&amp;',
                '"': '&quot;',
                "'": '&#39;',
                '<': '&lt;',
                '>': '&gt;'
            }[c]));
        }

        function renderStarIcons(count) {
            let result = '';
            for (let i = 1; i <= 5; i++) {
                result += `<span class="star ${i <= count ? 'filled' : ''}" aria-hidden="true">★</span>`;
            }
            return result;
        }

        function updateRatingStars() {
            ratingStars.forEach(star => {
                const value = Number(star.dataset.value);
                star.classList.toggle('filled', currentRating >= value);
            });
        }

        function renderReviews() {
            const reviews = loadContactReviews();
            if (reviews.length === 0) {
                reviewAverage.textContent = '0.0';
                reviewAverageStars.innerHTML = renderStarIcons(0);
                reviewCount.textContent = '0 تعليق';
                contactReviewsList.innerHTML = '<div class="empty-review">لا توجد تعليقات بعد. كن أول من يشارك رأيه.</div>';
                return;
            }

            const sum = reviews.reduce((total, review) => total + Number(review.rating || 0), 0);
            const avg = sum / reviews.length;
            const roundedAvg = Math.round(avg);

            reviewAverage.textContent = avg.toFixed(1);
            reviewAverageStars.innerHTML = renderStarIcons(roundedAvg);
            reviewCount.textContent = `${reviews.length} تعليق${reviews.length === 1 ? '' : 'ات'}`;

            contactReviewsList.innerHTML = reviews.slice().reverse().map(review => {
                return `
                    <div class="review-item">
                        <div class="review-meta">
                            ${renderStarIcons(Number(review.rating || 0))}
                            <span>${escapeHtml(review.author || 'مجهول')} — ${new Date(review.date).toLocaleString()}</span>
                        </div>
                        <div class="review-text">${escapeHtml(review.text)}</div>
                    </div>
                `;
            }).join('');
        }

        ratingStars.forEach(star => {
            star.addEventListener('click', () => {
                currentRating = Number(star.dataset.value);
                updateRatingStars();
            });
            star.addEventListener('mouseenter', () => {
                const hoverValue = Number(star.dataset.value);
                ratingStars.forEach(s => s.classList.toggle('filled', Number(s.dataset.value) <= hoverValue));
            });
            star.addEventListener('mouseleave', updateRatingStars);
        });

        submitReview.addEventListener('click', () => {
            const author = reviewName.value.trim() || 'مجهول';
            const text = reviewText.value.trim();

            if (currentRating <= 0) {
                alert('اختر تقييمًا من 1 إلى 5');
                return;
            }
            if (!text) {
                alert('أضف تعليقًا قبل الإرسال');
                return;
            }

            const reviews = loadContactReviews();
            reviews.push({
                author,
                text,
                rating: currentRating,
                date: new Date().toISOString()
            });
            saveContactReviews(reviews);
            reviewName.value = '';
            reviewText.value = '';
            currentRating = 0;
            updateRatingStars();
            renderReviews();
        });

        renderReviews();
    </script>`;
const repaired = text.slice(0, blockStart) + newBlock + text.slice(blockEnd + '</script>'.length);
fs.writeFileSync(path, repaired, 'utf8');
console.log('review script replaced');
