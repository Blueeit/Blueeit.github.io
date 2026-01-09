$(document).ready(function () {
    //스크롤시 nav 배경색 변경
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');

    }
  });

  //nav 모바일
  $('.mobile-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('nav-wrap nav').toggleClass('is-open');
  });
});