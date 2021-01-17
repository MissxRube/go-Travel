window.onload=function (){




        
        gsap.utils.toArray(".comparisonSection").forEach(section => {
                let tl = gsap.timeline({
                                scrollTrigger: {
                                        trigger: section,
                                        start: "center center",
                // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
                                        end: () => "+=" + section.offsetWidth, 
                                        scrub: true,
                                        pin: true,
                                        anticipatePin: 1
                                },
                                defaults: {ease: "none"}
                        });
                // animate the container one way...
                tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".afterImage img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                
                .fromTo(section.querySelector(".afterImage2"), { xPercent: 100, x: 0}, {xPercent: 0})
                // ...and the image the opposite way (at the same time)
                .fromTo(section.querySelector(".afterImage2 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                .fromTo(section.querySelector(".afterImage3"), { xPercent: 100, x: 0}, {xPercent: 0})
                .fromTo(section.querySelector(".afterImage3 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                .fromTo(section.querySelector(".afterImage4"), { xPercent: 100, x: 0}, {xPercent: 0})
                
                .fromTo(section.querySelector(".afterImage4 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                // .fromTo(section.querySelector(".afterImage5"), { xPercent: 100, x: 0}, {xPercent: 0})
                // // ...and the image the opposite way (at the same time)
                // .fromTo(section.querySelector(".afterImage5 img"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                .fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0}, {xPercent: 0})
                
                .fromTo(section.querySelector(".testimg"), {xPercent: -100, x: 0}, {xPercent: 0}, 0)
                ;



                
        });




}
