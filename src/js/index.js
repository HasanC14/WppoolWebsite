// Loader
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".loader-wrapper").style.display = "none";
// });

// document.addEventListener("scroll", function () {
//   const scrollPosition = window.scrollY;
//   const parallaxElement = document.querySelector(".background");
//   parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
// });

// document.addEventListener("scroll", function () {
//   const navbar = document.querySelector("nav");
//   if (window.scrollY > window.innerHeight) {
//     navbar.classList.add("bg-white");
//   } else {
//     navbar.classList.remove("bg-white");
//   }
// });

$("#table").DataTable({
  searching: true,
  ordering: true,
  paging: true,
});
