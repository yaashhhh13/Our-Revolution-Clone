var image = document.querySelectorAll(".image")
var imageslider1 = document.querySelector(".image-slider1")
var imageslider2 = document.querySelector(".image-slider2")
var imageslider3 = document.querySelector(".image-slider3")
var imageslider4 = document.querySelector(".image-slider4")
var smallimg1 = document.querySelector(".img1")
var smallimg2 = document.querySelector(".img2")
var smallimg3 = document.querySelector(".img3")
var smallimg4 = document.querySelector(".img4")
var work = document.querySelector("#nav3 h3")
var workloader = document.querySelector("#work-loader")
var workimg = document.querySelectorAll(".work img")

var pl = gsap.timeline()
pl.from("#page1-head h1",{
    y: "40px",
    opacity: 0,
    duration: 0.2
})
pl.from("#page1-head h2",{
    y: "40px",
    opacity: 0,
    duration: 0.2
})
pl.from("#page1-head h3",{
    y: "40px",
    opacity: 0,
    duration: 0.2
})
pl.from("#nav2",{
    opacity: 0
})
pl.from("#nav1",{
    opacity: 0
})
pl.from("#nav3",{
    opacity: 0
})
pl.from("#projectshead",{
    opacity: 0
})
pl.from("#projectsbody img",{
    opacity: 0,
    y: "10px",
    stagger: .2
})

document.querySelector("#nav1 h3").addEventListener("click",function(){
    document.querySelector("#menu-loader").style.top = "0%"
    document.querySelector("#nav").style.zIndex = "9"
    document.querySelector("#menu-loader").style.position = "fixed"
})
document.querySelector("#menunav1 h3").addEventListener("click",function(){
    document.querySelector("#menu-loader").style.top = "-100%"
    document.querySelector("#nav").style.zIndex = "999999"
    document.querySelector("#menu-loader").style.position = "absolute"
})

work.addEventListener("click",function(){
    var rl = gsap.timeline()
    rl.to("#work-loader",{
        top: "0%",
    })
    rl.to("#workloaderhead1 h1",{
        top: "0px",
        duration: .2
    })
    rl.to("#workloaderhead2 h1",{
        top: "0px",
        duration: .2
    })
    rl.to("#workloaderhead1 h1",{
        opacity: 0,
        duration: .001
    })
    rl.to("#works",{
        zIndex: "999",
        duration: .00001
    })
    rl.to("#workloaderhead2 h1",{
        opacity: 0,
        duration: .001
    })
    rl.from(".work img",{
        y: "80px",
        stagger: .2,
        opacity: 0
    })
    workloader.style.position = "fixed"
})

document.querySelector("#worknav3 h3").addEventListener("click",function(){
    gsap.to("#work-loader",{
        top: "100%"
    })
    gsap.to("#workloaderhead1 h1",{
        top: "150px",
        duration: .2
    })
    gsap.to("#workloaderhead2 h1",{
        top: "250px",
        duration: .2
    })
    gsap.to("#workloaderhead1 h1",{
        opacity: 1,
        duration: .001
    })
    gsap.to("#workloaderhead2 h1",{
        opacity: 1,
        duration: .001
    })
    gsap.to("#works",{
        zIndex: "1"
    })
    workloader.style.position = "absolute"
})

workimg.forEach(function(anim2){
    anim2.addEventListener("mousemove",function(){
        this.style.borderRadius = "61% 39% 64% 36% / 61% 36% 64% 39%";
        this.style.rotate = "10deg"
    })
    anim2.addEventListener("mouseleave",function(){
        this.style.borderRadius = "0%";
        this.style.rotate = "0deg"
    })
})

gsap.to(".work img",{
    scrollTrigger:{
        trigger: ".work img",
        start: "top 10%",
        // markers: true,
    },
    x: "-50%"
})

document.querySelector("#img1").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img1 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img1 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img2").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img2 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img2 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img3").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img3 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img3 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img4").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img4 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img4 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img5").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img5 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img5 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img6").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img6 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img6 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img7").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img7 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img7 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img8").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img8 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img8 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img9").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img9 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img9 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img10").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img10 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img10 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img11").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img11 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img11 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img12").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img12 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img12 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img13").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img13 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img13 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img14").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img14 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img14 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img15").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img15 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img15 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img16").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img16 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img16 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img17").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img17 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img17 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img18").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img18 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img18 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img19").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img19 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img19 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img20").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img20 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img20 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img21").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img21 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img21 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img22").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img22 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img22 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img23").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img23 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img23 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img24").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img24 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img24 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img25").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img25 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img25 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img26").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img26 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img26 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img27").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img27 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img27 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img28").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img28 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img28 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img29").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img29 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img29 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img30").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img30 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img30 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img31").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img31 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img31 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img32").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl.to("#img32 img",
    {
        top: "0%",
        // ease: "easeIn"
    })

    tl.to("#img32 img",
    {
        top: "100%",
        delay: .1
    }) 
})

document.querySelector("#img33").addEventListener("mousemove",function(){
    var tl = gsap.timeline()
    tl
    .to("#img33 img",
    {
        x: "400px",
        y: "-300px",
        rotate: "10deg"
    })

    .to("#img33 img",
    {
        x: "550px",
        y: "300px",
        rotate: "20deg"
    }) 

    .to("#img33 img",{
        y: "300px",
        x: "0px",
        rotate: "0deg"
    })
})

    smallimg1.addEventListener("mousemove",function(){
        imageslider1.style.left = "0%"
        imageslider1.style.zIndex = "999999"
    })
    smallimg1.addEventListener("mouseleave",function(){
        imageslider1.style.left = "-100%"
    })
    
    smallimg2.addEventListener("mousemove",function(){
        imageslider2.style.left = "0%"
        imageslider2.style.zIndex = "999999"
    })
    smallimg2.addEventListener("mouseleave",function(){
        imageslider2.style.left = "-100%"
    })
    
    smallimg3.addEventListener("mousemove",function(){
        imageslider3.style.left = "0%"
        imageslider3.style.zIndex = "999999"
    })
    smallimg3.addEventListener("mouseleave",function(){
        imageslider3.style.left = "-100%"
    })
    
    smallimg4.addEventListener("mousemove",function(){
        imageslider4.style.left = "0%"
        imageslider4.style.zIndex = "999999"
    })
    smallimg4.addEventListener("mouseleave",function(){
        imageslider4.style.left = "-100%"
    })

gsap.to("#nav",{
    scrollTrigger:{
        trigger: "#nav",
        start: "top top",
        // markers: true,
        scrub: 3
    },
    y: "20px",
    duration: .5
})

gsap.to("#para",{
    scrollTrigger:{
        trigger: "#para",
        start: "top 80%",
        end: "bottom top",
        // markers: true,
        scrub: 1
    },
    y: "-100px",
    duration: .1
})

gsap.to("#block1",{
    scrollTrigger:{
        trigger: "#block1",
        start: "top 60%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "400px",
    height: "600px",
    // y: "-100px"
})

gsap.to("#block1 img",{
    scrollTrigger:{
        trigger: "#block1 img",
        start: "top 60%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "100%",
    height: "100%",
})

document.querySelector("#block1").addEventListener("mousemove",function(move){
    document.querySelector("#b1mousemove").style.width = "110px"
    document.querySelector("#b1mousemove").style.height = "110px"
    document.querySelector("#b1mousemove h5").style.opacity = 1
    document.querySelector("#b1mousemove").style.top = move.y + "px";
    document.querySelector("#b1mousemove").style.left = move.x + "px";
})

document.querySelector("#block1").addEventListener("mouseleave",function(move){
    document.querySelector("#b1mousemove").style.width = "0px"
    document.querySelector("#b1mousemove").style.height = "0px"
    document.querySelector("#b1mousemove h5").style.opacity = 0
})

gsap.to("#block2",{
    scrollTrigger:{
        trigger: "#block2",
        start: "top 70%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    height: "650px",
    // y: "-200px"
})

gsap.to("#block2 img",{
    scrollTrigger:{
        trigger: "#block2 img",
        start: "top 90%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "100%",
    height: "100%",
})

gsap.to("#block3",{
    scrollTrigger:{
        trigger: "#block3",
        start: "top 70%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    height: "600px",
    // y: "-150px"
})

gsap.to("#block3 img",{
    scrollTrigger:{
        trigger: "#block3 img",
        start: "top 90%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "200%",
    height: "100%",
})

gsap.to("#block4",{
    scrollTrigger:{
        trigger: "#block4",
        start: "top 45%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    height: "670px",
    // y: "-150px"
})

gsap.to("#block4 img",{
    scrollTrigger:{
        trigger: "#block4 img",
        start: "top 60%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "200%",
    height: "100%",
})

gsap.to("#block5",{
    scrollTrigger:{
        trigger: "#block5",
        start: "top 40%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    height: "670px",
    // y: "-150px"
})

gsap.to("#block5 img",{
    scrollTrigger:{
        trigger: "#block5 img",
        start: "top 40%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "200%",
    height: "120%",
})

gsap.to("#block6",{
    scrollTrigger:{
        trigger: "#block6",
        start: "top 80%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    height: "600px",
    // y: "-150px"
})

gsap.to("#block6 img",{
    scrollTrigger:{
        trigger: "#block6 img",
        start: "top 70%",
        end: "bottom top",
        // markers: true,
        scrub: 2
    },
    // width: "200%",
    height: "120%",
})

gsap.from("#h11",{
    scrollTrigger:{
        trigger: "#h11",
        // markers: true,
        start: "top 85%",
        end: "bottom bottom",
        scrub: 1
    },
    y: "-60px"
})

gsap.from("#h12",{
    scrollTrigger:{
        trigger: "#h12",
        // markers: true,
        start: "top 85%",
        end: "bottom bottom",
        scrub: 1
    },
    y: "-30px"
})

var swiper = new Swiper("#works", {
    loopedSlides: 8,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: {
      releaseOnEdges: true,
    },
  });
  
  var thumb = document.querySelectorAll(".work");
  
  thumb.forEach(function(image, index) {
    var delay = index * 90;
    image.classList.add("fadeInSlide");
    image.style.animationDelay = delay + "ms";
  });


