// global.js
// Fade in the page when it fully loads
window.addEventListener('DOMContentLoaded', () => {
	document.body.classList.add('fade-in');
});

// Intercept clicks on links to fade out before leaving
document.querySelectorAll('a').forEach(link => {
	// Skip external links or anchor links
	if (link.hostname === window.location.hostname && !link.hash) {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const targetUrl = link.href;
			document.body.classList.remove('fade-in');
			
			// Wait for the fade-out transition to finish, then navigate
			setTimeout(() => {
				window.location.href = targetUrl;
			}, 250); 
		});
	}
});