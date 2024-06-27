
var lt = gsap.timeline()
lt.from(".nav-links h6", {
  y: -30,
  opacity: 0,
  duration: 2,
  delay: 0.5,
  stagger: 0.5,
})
gsap.fromTo("#designation span", 
  {
    opacity: 1, // Start fully visible
  },
  {
    opacity: 0, // Animate to transparent
    duration: 0.5, // Duration of each blink
    repeat: 1, // Repeat indefinitely
    yoyo: true, // Reverse the animation to create a blink effect
    stagger: {
      each: 0.1, // Stagger start time of each animation by 0.1 seconds
      // Yoyo the stagger
    },
    ease: "power4.inOut" // Easing for smooth animation
  }
);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-page",
    start: "-30% 10%",
    end: "120% 110%",
    markers: false,
    scrub: 1,
  },
})
tl.to(".about-pagetxt1,.about-pagetxt2", {
  opacity: 1,
  duration: 1,
  ease: "power1.inOut"
});



window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    gsap.to(".ri-arrow-right-down-line", {
      rotate: 180, // Rotate the element 180 degrees
      duration: 0.1, // Duration of the animation in seconds
      color: "white",
      ease: "elastic.out(1,0.3)" // Easing function for a smooth animation
    });
    gsap.to(".nav-links", {
      opacity: 0
    })
  } else if (event.deltaY < 0) {
    gsap.to(".ri-arrow-right-down-line", {
      rotate: 0, // Reset the rotation
      duration: 0.1,
      color: "transparent",
      ease: "elastic.out(1,0.3)"
    });
    gsap.to(".nav-links", {
      opacity: 1
    })
  }
});


