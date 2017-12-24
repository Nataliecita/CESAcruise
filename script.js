$(document).ready(function() {
  //add checkmark to active color choice
  $('.color-choose input').on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
  });
});
