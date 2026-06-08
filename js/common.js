$(document).ready(function () {

    const mobileWidth = 565;

    function isMobiole() {
        return window.innerWidth <= mobileWidth;
    }

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

  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {      // 화면 안에 들어오면
      entry.target.classList.add('visible');  // .visible 클래스 추가
    }
  });
}, { threshold: 0.1 });  // 요소가 10% 이상 보일 때 발동

// 감지할 요소들에 observer 연결
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  
});