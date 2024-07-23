
$(window).on("load", function(){
    $(".preloader").addClass("complete")

});
// sticky header
$(document).ready(function(){
    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if (scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeclass("stickyadd");
        }
    });

    var typed = new Typed(".element", {
        strings: ["Tino", "a Web Developer", "a Digital Strategist", "SEO Expert"],
        smartBackspace: true,
        typeSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });
    
// progress bars


var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {

        var progressBar =document.querySelectorAll(".progress-bar");
        progressBar[0].setAttribute("style", "width:100%; transition:1s all");
        progressBar[1].setAttribute("style", "width:95%; transition:1.5s all");
        progressBar[2].setAttribute("style", "width:100%; transition:1s all");
        progressBar[3].setAttribute("style", "width:100%; transition:2s all");
        progressBar[4].setAttribute("style", "width:100%; transition:2.5s all");
        progressBar[5].setAttribute("style", "width:100%; transition:1s all");
            
    },
    offset:"90%",
  });

//   var filterizd = $(".filter-container").filterizr({
//     animationDuration:.5
//   });
     // Initialize Filterizr
     var filterizd = $('.filter-container').filterizr({
        animationDuration: 0.5 // Animation duration in seconds
    });

    // Filter buttons
    $('.t-btn').click(function() {
        var filterValue = $(this).attr('data-filter');
        filterizd.filterizr('filter', filterValue);
    });
  

})
