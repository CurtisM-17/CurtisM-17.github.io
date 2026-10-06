// global.js
window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('a').forEach(link => {
    if (link.hostname === window.location.hostname && !link.hash) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.href;
            document.body.classList.remove('fade-in');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 250); 
        });
    }
});