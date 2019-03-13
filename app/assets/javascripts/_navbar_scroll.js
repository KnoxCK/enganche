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

//Scrolling icons

//brands icons
const brandsContainer = document.getElementById("brandsContainer")
const brandsScrollWidth = brandsContainer.scrollWidth
const brandsContainer2 = document.getElementById("brandsContainer2")
const brandsScrollWidth2 = brandsContainer.scrollWidth

window.addEventListener("load", () => {
  self.setInterval(() => {
    if(brandsContainer.scrollLeft !== brandsScrollWidth) {
      brandsContainer.scrollTo(brandsContainer.scrollLeft+1, 0);
    }
  }, 15);
})

//sponsorship icons
const sponsorshipContainer = document.getElementById("sponsorshipContainer")
const sponsorshipScrollWidth = sponsorshipContainer.scrollWidth
const sponsorshipContainer2 = document.getElementById("sponsorshipContainer2")
const sponsorshipScrollWidth2 = sponsorshipContainer.scrollWidth

window.addEventListener("load", () => {
  self.setInterval(() => {
    if(sponsorshipContainer.scrollLeft !== sponsorshipScrollWidth) {
      sponsorshipContainer.scrollTo(sponsorshipContainer.scrollLeft+1, 0);
    }
  }, 15);
})