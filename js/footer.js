document.addEventListener("DOMContentLoaded", () => {
    const cursorCircle = document.querySelector('.cursor');
    const hoverTargets = document.querySelectorAll('.hover-target');

    // Move the cursor circle with mouse movement
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursorCircle, { 
            x: e.clientX, 
            y: e.clientY, 
            duration: 0.1,
            ease: "power2.out"
        });
    });

    hoverTargets.forEach(target => {
        // Change the cursor circle to the specific image on hover
        target.addEventListener('mouseenter', () => {
            const cursorImage = target.getAttribute('data-cursor');
            gsap.to(cursorCircle, { 
                width: 350, 
                height: 200, 
                borderRadius:'0% ',
                backgroundColor: 'transparent', 
                backgroundImage: `url(${cursorImage})`,
                backgroundSize: 'cover',
                duration: 0.3,
                ease: "power2.out"
            });
        });

        // Change the cursor back to the original circle when hover ends
        target.addEventListener('mouseleave', () => {
            gsap.to(cursorCircle, { 
                width: 10, 
                height: 10, 
                backgroundColor: 'purple', 
                backgroundImage: 'none',
                duration: 0.3,
                borderRadius:'50% ',
                ease: "power2.out"
            });
        });
    });
});
