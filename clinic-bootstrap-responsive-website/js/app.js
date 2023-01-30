let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("headerScrolled");
  } else {
    nav.classList.remove("headerScrolled");
    console.log("sadfsdfsff");
  }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
