app.motionplate = (function($){
  'use strict';

  function init(){
    mpSetup();
    mpScrollMagic();
  }

  function mpSetup() {

    // Add .animated class to any elements with mp-animation attribute
    $("[mp-animation]").addClass('animated');

    // Add animation-duration styles to element if mp-duration attribute is set
    $('[mp-duration]').each(function() {
      var $duration = $(this).attr('mp-duration');
      $(this).css('animation-duration',$duration);
    })

    // Add animation-delay styles to element if mp-delay attribute is set
    $('[mp-delay]').each(function() {
      var $delay = $(this).attr('mp-delay');
      $(this).css('animation-delay',$delay);
    })

  }

  function mpScrollMagic() {

    // Sets up a ScrollMagic controller to watch for elements with animate.css classes
    // Expects elements to have class .animate, and data-animation attributes for animation classes
    // Example: <div mp-animate="bounceInUp" mp-triggerhook="onEnter" mp-offset="180" mp-reverse="false">Hello world</div>
    var mpController = new ScrollMagic.Controller();

    $("[mp-animation]").each(function(index, elem) {
      var $triggerHook = $(elem).attr('mp-triggerhook');
      var $offset = $(elem).attr('mp-offset');
      var $reverse = $(elem).attr('mp-reverse');

      $triggerHook = typeof $triggerHook != 'undefined' ? $triggerHook : 'onEnter';
      $offset = typeof $offset != 'undefined' ? $offset : '180';
      $reverse = typeof $reverse != 'undefined' ? $reverse : true;

      new ScrollMagic.Scene({ 
        triggerElement: elem, 
        offset: $offset,
        triggerHook: $triggerHook,
        reverse: $reverse
      })
      .on('start', function () {
        var animatedElement = this.triggerElement();
        var animatedClasses = $(animatedElement).attr('mp-animation');
        $(animatedElement).addClass(animatedClasses); 
      })
      .addTo(mpController);  
    })

  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);