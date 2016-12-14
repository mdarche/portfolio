$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".navbar-fixed-top").addClass("show");
      $(".navbar-nav li a").addClass("toggle");
      $(".navbar-default .logo").addClass("toggle");
    } else {
      $(".navbar-fixed-top").removeClass("show");
      $(".navbar-nav li a").removeClass("toggle");
      $(".navbar-default .logo").removeClass("toggle");
    }

    if ($(document).scrollTop() > 280) {
      $('.overview h4').css('opacity', '1');
    } else {
      $(".overview h4").css("opacity", "0");
    }

    if ($(document).scrollTop() > 720) {
      $('#about h4').css('opacity', '1');
    } else {
      $("#about h4").css("opacity", "0");
    }

  });
});
