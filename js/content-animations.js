gsap.registerPlugin(ScrollTrigger);

// Function to split text into individual words
function splitTextIntoWords(selectors) {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Split the text content into words and wrap each word in a <span> element
            el.innerHTML = el.textContent.split(' ').map(word => `<span>${word}</span>`).join(' ');
            console.log(`Processed element: ${el.innerHTML}`); // Debug: Log the processed HTML
        });
    });
}

// Run the splitTextIntoWords function after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    splitTextIntoWords(['.about-title-content p', '#Intro p']);

    // Animate individual words for the selectors
    const selectors = ['.about-title-content p', '#Intro p'];

    selectors.forEach(selector => {
        gsap.fromTo(
            `${selector} span`,  // Target spans within the specified selector
            { y: 30, opacity: 0 },  // Initial state
            {
                y: 0,  // End state
                opacity: 1,
                duration: 0.5,
                stagger: 0.1, // Delay between the animations of each word
                ease: "power2.out",
                scrollTrigger: {
                    trigger: selector,  // Trigger animation when the element is in view
                    start: 'top 75%',  // Start animation when the top of the element is 75% from the top of the viewport
                    end: 'bottom 25%',  // Optional: End animation when the bottom of the element is 25% from the top of the viewport
                    toggleActions: 'play none none none',  // Play animation when trigger is in view
                    once: true,  // Ensure the animation only happens once
                }
            }
        );
        console.log(`Animation set for selector: ${selector}`); // Debug: Log the animation setup
    });
});