gsap.registerPlugin(ScrollTrigger);

// Function to split text into individual letters
function splitTextIntoLetters(selectors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.innerHTML = el.textContent.split('').map(letter => `<span>${letter}</span>`).join('');
        });
    });
}

// Split the text into individual letters for the specific selectors
splitTextIntoLetters(['.about-pagetxt1 h3', '.expertise-title h3', '.experience-title h3', '.contact-title h3','.nav-links p']);

// Animate individual letters for the selectors
const selectors = ['.about-pagetxt1 h3', '.expertise-title h3', '.experience-title h3', '.contact-title h3','.nav-links p'];

selectors.forEach(selector => {
    gsap.fromTo(
        `${selector} span`, // Target spans within h3 of all specified classes
        { y: 30, opacity: 0 },  // Initial state
        {
            y: 0,  // End state
            opacity: 1,
            duration: 0.5,
            stagger: 0.05, // Delay between the animations of each letter
            ease: "power2.out",
            scrollTrigger: {
                trigger: selector, // Trigger animation when any of these elements is in view
                start: 'top 75%', // Start animation when the top of the element is 75% from the top of the viewport
                end: 'bottom 25%', // Optional: End animation when the bottom of the element is 25% from the top of the viewport
                toggleActions: 'play none none none', // Play animation when trigger is in view
                once: true,  // Ensure the animation only happens once
            }
        }
    );
});
