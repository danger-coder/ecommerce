$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".cat").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
      loop: true,
    },
  },
});
$(".cats").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 8,
      nav: false,
      loop: true,
    },
  },
});

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav");
  nav.classList.toggle("actives", window.scrollY > 50);
});
