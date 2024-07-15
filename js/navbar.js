var menu = document.querySelector('.menu-bar-entry i')
var cross = document.querySelector('#full i')
var aboutmenutext = document.querySelector('#about2 h4')
var contactmenutext = document.querySelector('#contact2 h4')
var expertisemenutext = document.querySelector('#expertise2 h4')
var experiencemenutext = document.querySelector('#experience2 h4')
var vf = gsap.timeline()

vf.to("#full",{
    right:0,
    duration:0.6,
    delay:0.5,
    display:'block',
    ease: "circ.out"
    

})
vf.from("#full div h4",{
    x:10,
    duration:0.3,
    stagger:0.12,
    ease: "circ.out",
 
})
vf.from("#full i",{
    opacity:0,
})

vf.pause()
menu.addEventListener("click", function(){
    vf.play()
})
cross.addEventListener("click", function(){
    vf.reverse()
})
aboutmenutext.addEventListener("click", function(){
    vf.reverse()
})
contactmenutext.addEventListener("click", function(){
    vf.reverse()
})
experiencemenutext.addEventListener("click", function(){
    vf.reverse()
})
expertisemenutext.addEventListener("click", function(){
    vf.reverse()
})