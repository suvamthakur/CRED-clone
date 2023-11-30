// Navbar
let hamburger = document.querySelector(".hamburger");
let home = document.querySelector("#home");
hamburger.addEventListener("click", function() {
    home.classList.toggle("active");
})

// Interface animation
gsap.from(".screens", { 
    scrollTrigger: {
        trigger: ".screen",
        scroller: "body"
    },
    y: 500,
    duration: 1.5
})

// Scroll container animation
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#scroll-container",
        // markers: true,
        start: "50% 50%",
        end: "200% 50%",
        scrub: 2,   // By using scrub animation duration (start - end)
        pin: true
    },
});

tl.to("#scroll-text-1", {
    top: "0",
    duration: 5
})
.to("#scroll-text-1", {
    opacity: 0,
})

// 2nd scroll
.to("#scroll-text-2", {
    opacity: 1,
    duration: 2
}, 'anim1')

.to(".mobile-img-1", {  // animation with the images at same time
    opacity: 0,
}, 'anim1')
.to(".mobile-img-2", {
    x: "-100%",
}, 'anim1')

.to("#scroll-text-2", {
    top: "0",
    duration: 5
})
.to("#scroll-text-2", {
    opacity: 0,
})

// 3rd scroll
.to("#scroll-text-3", {
    opacity: 1,
    duration: 2
}, 'anim2')

.to(".mobile-img-2", {  // animation with the images at same time
    opacity: 0,
}, 'anim2')
.to(".mobile-img-3", {
    x: "-200%",
}, 'anim2')

.to("#scroll-text-3", {
    top: "0",
    duration: 5
})
.to("#scroll-text-3", {
    opacity: 0,
})

// 4th scroll
.to("#scroll-text-4", {
    opacity: 1,
    duration: 5
}, 'anim3')

.to(".mobile-img-3", {  // animation with the images at same time
    opacity: 0,
}, 'anim3')
.to(".mobile-img-4", {
    x: "-300%",
}, 'anim3')


// Swipper js
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});