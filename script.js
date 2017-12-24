$(document).ready(function() {
  //
  $('.color-choose input').on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
  });
});
