gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('DOMContentLoaded', () => {
        const img = document.querySelector('.contactimg img');
        const overlay = document.querySelector('.white-overlay');

        // GSAP animation with ScrollTrigger
        gsap.timeline({
            scrollTrigger: {
                trigger: '.contactimg',
                duration:0.3,
                stagger:0.02,
                opacity:1,
                start: 'top 75%', // Start the animation when the top of the .contactimg element is 75% from the top of the viewport
                end: 'bottom 25%', // End the animation when the bottom of the .contactimg element is 25% from the top of the viewport
                toggleActions: 'play none none none', // Play the animation on scroll
                once: true, // Ensure the animation only happens once
            }
        })
        .to(img, { x: '100%', duration: 1, ease: 'power2.out' }) // Move image from left to right
        .to(overlay, { opacity: 0, duration: 0.5, ease: 'power2.out' }, "-=0.5"); // Fade out the white overlay
    });