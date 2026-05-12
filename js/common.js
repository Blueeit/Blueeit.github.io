$(document).ready(function () {

    const mobileWidth = 565;

    function isMobiole() {
        return window.innerWidth <= mobileWidth;
    }

    //스크롤시 nav 배경색 변경
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');

    }
  });

  //pc hover
  $('.main-nav').hover(
    function(){
    if(!isMobiole()) {
        $(this).children('.sub-nav').stop().fadeIn(200);
    }
},
    function() {
         if(!isMobiole()) {
        $(this).children('.sub-nav').stop().fadeOut(200);
        }
    }
  );

  //mobile click
  $('.main-nav:has(.sub-nav)').click(function () {
    if(isMobiole()) {
        $(this).children('.sub-nav').stop().slideToggle(200);
    }
  });

  $('.mobile-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-wrap nav').toggleClass('is-open');
  });

  $('.nav-menu a').on('click', function() {
    if(isMobiole()) {
        $('.nav-overlay').removeClass('is-open');

        $('.mobile-menu-btn').removeClass('active');

        $('.sub-nav').hide();
    }
  });

  //nav overlay click
  $('.nav-overlay').on('click', function() {
    $(this).removeClass('is-open');
    $('.mobile-menu-btn').removeClass('active');
  })

  //nav menu 클릭시 닫힘 방지
  $('.nav-overlay .nav-menu').on('click', function(e) {
    e.stopPropagation();
  });

  
});