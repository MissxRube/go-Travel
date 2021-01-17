$(function(){
        $(window).scroll(function() {
                scroll_pos = $(window).scrollTop() + $(window).height(); 
                element_pos = $(".northbar").offset().top + $(".northbar").height() ; 
                element_pos1 = $(".northbar1").offset().top + $(".northbar1").height() ; 
                if (scroll_pos > element_pos) { 
                        $(".northbar").addClass('northbarmove')
                        $(".viewtitle").addClass('viewtitlemove')
                        

                }else{
                        $(".northbar").removeClass('northbarmove')
                        $(".viewtitle").removeClass('viewtitlemove') 
                      
                }
              
                if (scroll_pos > element_pos1) { 
                        $(".northbar1").addClass('northbarmove1')
                        $(".viewtitle1").addClass('viewtitlemove1')
                        

                }else{
                        $(".northbar1").removeClass('northbarmove1')
                        $(".viewtitle1").removeClass('viewtitlemove1') 
                      
                }

        });
})