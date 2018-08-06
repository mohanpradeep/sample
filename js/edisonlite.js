(function($) {
    $(document).ready(function(){
      

        var calloutsOffset = $('.callouts').offset().top + 100;
        var feature1Offset = $('.feature-1').offset().top;
        var testimonialsOffset = $('.testimonials').offset().top;

        // Scroll to Callouts
        function scrollToCallouts() {
            $('html, body').animate({
                scrollTop : calloutsOffset,
            }, 550);
        }

        $('.scroll, .for-patients-link').on('click', function(e) { 
            e.preventDefault();
            scrollToCallouts();
        });

        if (window.location.hash === '#callouts') {
            scrollToCallouts();
        }

        $('.resources-link').on('click', function(e) {
            $('html, body').animate({
                scrollTop : feature1Offset,
            }, 550);
        });

        $('.testimonials-link').on('click', function(e) {
            $('html, body').animate({
                scrollTop : testimonialsOffset,
            }, 550);
        });
        
    });
 })(jQuery);