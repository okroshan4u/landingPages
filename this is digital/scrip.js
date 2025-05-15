gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})
gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})
gsap.from("#main h1",{
    delay:0.4,
    opacity:0,
    duration:1,
    
})

gsap.from(["#page2 h5", "#page2 h1","#page2 #about-us h4"], {
    opacity: 0,
     y: 50, 
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller: "body",
        start: "top 60%",
        // markers: true
    }
});

gsap.from(["#page3_right h1", "#page3_right p","#page3_right div"], {
    opacity: 0,
     y: 50, // adds a slide-in effect
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page3_right h1",
        scroller: "body",
        start: "top 90%",
        // markers: true
    }
});
gsap.from(["#page4_div1 h1"], {
    opacity: 0,
     y: 50, 
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page4_div1 h1",
        scroller: "body",
        start: "top 90%",
        // markers: true
    }
});
gsap.from(["#page5_top" ,"#page5_bottom"], {
    opacity: 0,
     y: 50, 
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page5_top ",
        scroller: "body",
        start: "top 60%",
        // markers: true
    }
});


gsap.from(["#page3_left_left img", "#page3_left_right img"], {
    opacity: 0,
    y: 50, 
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#page3_left_left img",    
        scroller: "body",        
        start: "top 90%",        
        // toggleActions: "play none none reverse" ,// optional: plays and reverses on scroll up/down
       // markers: true           
    }
});

gsap.from(["#footer_top_left ", "#footer_top_right h3", "#footer_top_right p", "#footer_top_right img"], {
    opacity: 0,
    y: 20, // optional: adds a slide-in effect
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#footer_top_left",      
        scroller: "body",         
        start: "top 90%",         
      //  markers: true           
    }
});



// swiper js code goes her
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
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      },
      loop: true,
    });

    // changing color of the navbar

    const nav = document.getElementById("nav")

    window.addEventListener('scroll', changNavColor)

    function changNavColor(){
      if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add("active")
      }else{
        nav.classList.remove("active")
      }
    }