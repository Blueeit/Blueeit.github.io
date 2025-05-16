$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
      // $('.logo-wrap img').attr('src', 'images/logo-txt-wh.svg');

    } else {
      $('#navbar').removeClass('scrolled');
      //$('.logo-wrap img').attr('src', 'images/logo-txt-bk.svg');
    }
  });
});