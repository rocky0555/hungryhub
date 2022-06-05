
// navbar transpaent

$(document).ready(function() {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
         //>=, not <=
        if (scroll >= 60) {
            //clearHeader, not clearheader - caps H
            // $(".navbar").addClass("bg-dark");
            $(".navbar").addClass("mystyle");
        } else {
          $(".navbar").removeClass("mystyle");
        }
    }); //missing );  
      
    // document ready  
    });



    // filter start

    $(document).ready(function(){
        $(".button").click(function(){
            var name = $(this).attr('data-filter');
            if(name == "all"){
                $(".filterElements").show('2000');
            }else{
                $(".filterElements").not("."+name).hide('2000');
                $(".filterElements").filter("."+name).show('2000');
            }
        })
      
        $(".navigation a").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        })
      })

    // filter end



    // testimonial owlcarousel start

    $(document).ready(function(){
// for multiple slider
// hero slider function start
        var heroSlider = $("#heroSlider");
        var testiSlider = $("#testiSlider");

        $("#heroSlider").owlCarousel({
            loop:true,
            dots:true,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 1000,
            autoplayHoverPause: true,
            items : 1, // THIS IS IMPORTANT
            responsive : {
                  480 : { items : 1  }, // from zero to 480 screen width 4 items
                  768 : { items : 1  }, // from 480 screen widthto 768 6 items
                  1024 : { items : 1   // from 768 screen width to 1024 8 items
                  }
              },
        });
// heroslider funciton end

        $("#testiSlider").owlCarousel({
            loop:true,
            dots:false,
            autoplay: true,
            autoPlaySpeed: 1000,
            autoPlayTimeout: 1000,
            autoplayHoverPause: true,
            items : 1, // THIS IS IMPORTANT
            responsive : {
                  480 : { items : 1  }, // from zero to 480 screen width 4 items
                  768 : { items : 1  }, // from 480 screen widthto 768 6 items
                  1024 : { items : 1   // from 768 screen width to 1024 8 items
                  }
              },
        });

      });

    // testimonial owlcarousel end



    // multiple navbar start
    $(function(){
        $("#nav-placeholder").load("nav.html");
      });