// Loader
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector(".loader-wrapper").style.display = "none";
// });

// document.addEventListener("scroll", function () {
//   const scrollPosition = window.scrollY;
//   const parallaxElement = document.querySelector(".background");
//   parallaxElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
// });
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav");
  const nav_logo1 = document.querySelector(".nav_logo1");
  const nav_logo2 = document.querySelector(".nav_logo2");
  const nav_btn1 = document.querySelector(".nav_btn1");
  const nav_btn2 = document.querySelector(".nav_btn2");
  const nav_text = document.querySelector(".nav_text");
  const nav_share1 = document.querySelector(".nav_share1");
  const nav_share2 = document.querySelector(".nav_share2");
  if (window.scrollY > window.innerHeight) {
    console.log(navbar);
    navbar.classList.add("bg-white");
    nav_logo1.classList.add("hidden");
    nav_logo2.classList.remove("hidden");
    nav_btn1.classList.add("hidden");
    nav_btn2.classList.remove("hidden");
    nav_share1.classList.add("hidden");
    nav_share2.classList.remove("hidden");
    nav_text.classList.remove("bg-prime", "border-white", "text-white");
    nav_text.classList.add("border-blue-500");
  } else {
    navbar.classList.remove("bg-white");
    nav_logo1.classList.remove("hidden");
    nav_logo2.classList.add("hidden");
    nav_btn1.classList.remove("hidden");
    nav_btn2.classList.add("hidden");
    nav_share1.classList.remove("hidden");
    nav_share2.classList.add("hidden");
    nav_text.classList.add("bg-prime", "border-white", "text-white");
    nav_text.classList.remove("border-blue-500");
  }
});

$("#table").DataTable({
  searching: true,
  ordering: true,
  paging: true,
  responsive: true,
});
