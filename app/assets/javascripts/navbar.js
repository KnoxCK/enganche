$(document).ready(function(){
 var hash = (window.location.hash);
 $(hash + "-nav").addClass("active");
 console.log("#nav-" + hash);

 $(".navbar-enganche-link").click(function(){
  $(".navbar-enganche-link").removeClass("active");
  $(this).addClass("active");
 })
  // if (window.location.hash === '#whatwedo') {
  //   $('#what-we-do-link').addClass('active');
  // } else {
  //   $('.navbar-addcap-right a').each(function() {
  //     if ($(this).attr('href') === pathname) {
  //       $(this).addClass('active');
  //     }
  //   });
  // }
  // $("#what-we-do-mobile-link").click(function(e) {
  //   e.preventDefault();
  //   $(".navbar-addcap-link").removeClass('active');
  //   $(this).addClass('active');
  //     $('html,body').animate({
  //         scrollTop: $(".what-we-do-wrapper").offset().top - 100},
  //         'slow');
  // });
});
