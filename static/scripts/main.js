$(document).ready(function() {

  //: Sticky navigation bar
  var nav = $('.navbar');
  var sticky = "sticky";
  var header = $('.header-wrapper').height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > header) {
      nav.addClass(sticky);
    } else {
      nav.removeClass(sticky);
    }
  });

  //: Smooth scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html,body').stop().animate({
      'scrollTop': $target.offset().top
    },900, 'swing');
  });

});
