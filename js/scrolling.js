
// Wrap your GSAP code inside DOMContentLoaded event listener to ensure it runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create a timeline
    var tp = gsap.timeline();

    // Add animations to the timeline
    tp.from(".slogan", {
        y: 30,
        opacity:0,
        duration: 0.9,
        delay:0.5, // Adjust duration as needed
       ease:"power3.out" // Adjust easing function as needed
    });

    // Add more animations if needed
    // tp.to(...);
});
