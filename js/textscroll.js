document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate'); // Select all elements with the animate class
    console.log(`Found ${elements.length} elements to animate`);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Element "${entry.target.className}" is intersecting`);
                entry.target.classList.add('visible');
            } else {
                console.log(`Element "${entry.target.className}" is not intersecting`);
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 1.0, rootMargin: '20%' });

    elements.forEach(el => observer.observe(el));
});