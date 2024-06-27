
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
});


document.addEventListener("mousemove", function (event) {
    var cursor = document.querySelector("#cursor");
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});


