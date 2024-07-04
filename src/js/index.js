// Loader
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loader-wrapper").style.display = "none";
});
const HandleNavbar = () => {
  $(".nav_content").toggleClass("hidden");
  $(".nav_bg").toggleClass("bg-white");
  $(".nav_btn").toggleClass("active");
};

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const parallaxElement = document.querySelector(".background");
  parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
