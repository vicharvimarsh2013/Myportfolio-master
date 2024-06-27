window.addEventListener("wheel", function(dets){
    if(dets.deltaY>0){
        gsap.to("#Name-text",{
            rotate:180,
            duration: 0.5
        })
    }
})
