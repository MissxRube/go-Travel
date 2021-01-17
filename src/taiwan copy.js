// window.onload=function (){

//         var topScroll =document.body.scrollTop;//滚动的距离,距离顶部的距离

        
//         // if(topScroll <= 250){


        
//         //         gsap.utils.toArray(".comparisonSection").forEach(section => {
//         //                 let tl = gsap.timeline({
//         //                                 scrollTrigger: {
//         //                                         trigger: section,
//         //                                         start: "center center",
//         //                 // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
//         //                                         end: () => "+=" + section.offsetWidth, 
//         //                                         scrub: true,
//         //                                         pin: true,
//         //                                         anticipatePin: 1
//         //                                 },
//         //                                 defaults: {ease: "none"}
//         //                         });
//         //                 // animate the container one way...
//         //                 tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
//         //                 // ...and the image the opposite way (at the same time)
//         //                 .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                        
//         //                 .fromTo(section.querySelector(".afterImage2"), { xPercent: 100, x: 0}, {xPercent: 0})
//         //                 // ...and the image the opposite way (at the same time)
//         //                 .fromTo(section.querySelector(".afterImage2 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
//         //                 .fromTo(section.querySelector(".afterImage3"), { xPercent: 100, x: 0}, {xPercent: 0})
//         //                 .fromTo(section.querySelector(".afterImage3 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
//         //                 .fromTo(section.querySelector(".afterImage4"), { xPercent: 100, x: 0}, {xPercent: 0})
                        
//         //                 .fromTo(section.querySelector(".afterImage4 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
//         //                 // .fromTo(section.querySelector(".afterImage5"), { xPercent: 100, x: 0}, {xPercent: 0})
//         //                 // // ...and the image the opposite way (at the same time)
//         //                 // .fromTo(section.querySelector(".afterImage5 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
//         //                 .fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
                        
//         //                 .fromTo(section.querySelector(".testimg"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
//         //                 ;
//         //         });
//         // }else{                          

//         //                 gsap.registerPlugin(ScrollTrigger)

//         //                 gsap.from(".herman", {
//         //                         duration:10, x:"200vw", rotation:-360, ease:"linear", 
//         //                                 scrollTrigger: {
//         //                                 trigger:".herman",
//         //                                 markers:true,
//         //                                 start:"top 75%", //when top of herman passes 75% viewport height
//         //                                 end:"bottom 25%", //when bottom of herman passes 25% viewport height
                                        
//         //                                         //events: onEnter onLeave onEnterBack onLeaveBack
//         //                                 toggleActions:"restart complete reverse reset"
//         //                                         //options: play, pause, resume, reset, restart, complete, reverse,none
//         //                         }
//         //                 }) 
                
//         // }
//         //  if(topScroll >= 500){
                
//         //  }




// }

// $(window).on('scroll' , function(){ 
        
//         scroll_pos = $(window).scrollTop() + $(window).height(); 
//         element_pos = $(".herman").offset().top + $(".herman").height() ; 
//         if (scroll_pos > element_pos) { 
//                 gsap.registerPlugin(ScrollTrigger)

//                         gsap.from(".herman", {
//                                 duration:10, x:"200vw", rotation:-360, ease:"linear", 
//                                         scrollTrigger: {
//                                         trigger:".herman",
//                                         markers:true,
//                                         start:"top 75%", //when top of herman passes 75% viewport height
//                                         end:"bottom 25%", //when bottom of herman passes 25% viewport height
                                        
//                                                 //events: onEnter onLeave onEnterBack onLeaveBack
//                                         toggleActions:"restart complete reverse reset"
//                                                 //options: play, pause, resume, reset, restart, complete, reverse,none
//                                 }
//                         }) 


//         }; 
    
//     }) 

