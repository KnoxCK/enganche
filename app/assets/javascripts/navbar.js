$(document).ready(function(){
  // var hash = (window.location.hash);
  // $(hash + "-nav").addClass("active");
  // console.log("#nav-" + hash);

  $(".navbar-enganche-link").click(function(){
    $(".navbar-enganche-link").removeClass("active");
    // $(this).addClass("active");
    $('html, body').animate({
      scrollTop: $($(this).attr('href').substr(1)).offset().top - 50
    }, 2000);
  })

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    var bottom = top + $(window).height();
    var half = (bottom + top) / 2
    var aboutTop = $('#about').offset().top;
    var playbookTop = $('#playbook').offset().top;
    var whyTop = $('#why-enganche').offset().top;
    var contactTop = $('#contact').offset().top;

    if (contactTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#contact-nav').addClass('active');
    } else if (whyTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#why-enganche-nav').addClass('active');
    } else if (playbookTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#playbook-nav').addClass('active');
    } else if (aboutTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#about-nav').addClass('active');
      console.log('oi oi')
    } else {
      $(".navbar-enganche-link").removeClass("active");
    }
  });
});
