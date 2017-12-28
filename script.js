$(document).ready(function() {
  //add checkmark to active color choice
  $('.color-choose input').on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
  });


  // scroll down from main image
  $('a[href^="#down"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 2500);
      }
  });

});
