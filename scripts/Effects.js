$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".navbar-fixed-top").css("background-color", "rgba(255, 255, 255, 0.97)");
      $(".navbar-fixed-top").css("border-bottom", "1px solid #eaeaea");
      $ (".navbar-nav li a").css("color", "#170133");
    } else {
      $(".navbar-fixed-top").css("background-color", "transparent");
      $(".navbar-fixed-top").css("border-bottom", "1px solid rgba(231, 231, 231, 0.18)");
      $ (".navbar-nav li a").css("color", "#fff");
    }

    if ($(document).scrollTop() > 280) {
      $('.overview h4').css('opacity', '1');
    } else {
      $(".overview h4").css("opacity", "0");
    }
  });
});
