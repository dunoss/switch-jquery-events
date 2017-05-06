$(function() {
  $('button.switch').on('click', function(){
    $(this).toggleClass('on');
    $(this).toggleClass('off');

    $('body').toggleClass('light');
    $('body').toggleClass('dark');

    if ($(this).hasClass('on')) {
      $('.status').text("Lights on");
    } else {
      $('.status').text("Lights off");
    }
  });
});
