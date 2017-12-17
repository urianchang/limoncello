$(document).ready(function() {
  var nav = $('.navbar');
  var sticky = "sticky";
  var header = $('.header').height();

  $(window).scroll(function() {
    if ($(this).scrollTop() > header) {
      nav.addClass(sticky);
    } else {
      nav.removeClass(sticky);
    }
  });

  $('#navbar a').click(function(e) {
    e.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash);
  });
});
