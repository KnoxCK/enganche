$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > $(window).height() * 0.99) {
        $("navbar-enganche").addClass("hidden");
        $("navbar-enganche-brand").addClass("hidden");
        $(".navbar-enganche-scroll").removeClass("hidden");
    } else if (scroll < $(window).height()) {
        $("navbar-enganche").removeClass("hidden");
        $(".navbar-enganche-scroll").addClass("hidden");
    }
});