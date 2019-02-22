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
const storyContainer = document.getElementById("storyContainer")
const storyScrollWidth = storyContainer.scrollWidth
const storyContainer2 = document.getElementById("storyContainer2")
const storyScrollWidth2 = storyContainer.scrollWidth

window.addEventListener("load", () => {
  self.setInterval(() => {
    if(storyContainer.scrollLeft !== storyScrollWidth) {
      storyContainer.scrollTo(storyContainer.scrollLeft+1, 0);
    }
  }, 15);
})