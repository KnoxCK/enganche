$(document).ready(function(){
  $(".navbar-enganche-link").click(function(){
    $(".navbar-enganche-link").removeClass("active");
    if ($(this).prop('id') === 'about-nav') {
      $.smoothScroll({
        scrollTarget: $(this).attr('href').substr(1),
        offset: -225,
        speed: 1500
      });
    } 
    else if ($(this).prop('id') === 'sponsorship-nav') {
      $.smoothScroll({
        scrollTarget: $(this).attr('href').substr(1),
        offset: -250,
        speed: 1500
      });
    } 
    else {
      $.smoothScroll({
        scrollTarget: $(this).attr('href').substr(1),
        offset: -50,
        speed: 1500
      });
    }
  })

  $(window).scroll(function(){
    var top = $(window).scrollTop();
    var bottom = top + $(window).height();
    var half = (bottom + top) / 2
    var sponsorshipTop = $('#sponsorship').offset().top;
    var aboutTop = $('#about').offset().top;
    var whyTop = $('#why-enganche').offset().top;
    var contactTop = $('#contact').offset().top;

    if (contactTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#contact-nav').addClass('active');
    } else if (whyTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#why-enganche-nav').addClass('active');
    } else if (aboutTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#about-nav').addClass('active');
    } else if (sponsorshipTop < half) {
      $(".navbar-enganche-link").removeClass("active");
      $('#sponsorship-nav').addClass('active');
      console.log('oi oi')
    } else {
      $(".navbar-enganche-link").removeClass("active");
    }
  });

  $(".arrow").click(function(){
    $.smoothScroll({
      scrollTarget: $(this).attr('href').substr(1),
      offset: -400,
      speed: 1000
    });
  })
});
