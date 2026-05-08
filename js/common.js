$(document).ready(function () {
    //스크롤시 nav 배경색 변경
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');

    }
  });

  //nav 
  $('.main-nav').hover(
    function(){
    if($(window).width() > 565){
        $(this).children('.sub-nav').stop().fadeIn(200);
    }
},
    function() {
         if($(window).width() > 565){
        $(this).children('.sub-nav').stop().fadeOut(200);
        }
    }
  );

  $('.main-nav:has(.sub-nav)').click(function () {
    if($(window).width() <= 565) {
        $(this).children('.sub-nav').stop().slideToggle(200);
    }
  });

  $('.mobile-menu-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.nav-wrap nav').toggleClass('is-open');
  });

  $('.nav-menu a').on('click', function() {
    if($(window).width() <= 565){
        $('.nav-overlay').removeClass('is-open');

        $('.mobile-menu-btn').removeClass('active');

        $('.sub-nav').hide();
    }
  })

  //nav 베경 클릭 > 닫기
  $('.nav-overlay').on('click', function() {
    $(this).removeClass('is-open');
    $('.mobile-menu-btn').removeClass('active');
  })

  //nav menu 클릭시 닫힘 방지
  $('.nav-overlay .nav-menu').on('click', function(e) {
    e.stopPropagation();
  });

  
});