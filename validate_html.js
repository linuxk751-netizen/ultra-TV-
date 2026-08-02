const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const count = (regex) => (text.match(regex) || []).length;
console.log('script tags:', count(/<script>/g), count(/<\/script>/g));
console.log('html tags:', count(/<html[\s>]/gi), count(/<\/html>/gi));
console.log('body tags:', count(/<body[\s>]/gi), count(/<\/body>/gi));
console.log('review script broken quote present?', text.includes("'': '&#39;'"));
