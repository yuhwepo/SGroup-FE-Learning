// MOBILE MENU

// let header = document.getElementById("header");
// let mobileMenuBtn = document.getElementById("mobile-menu-btn");
// let closeBtn = document.querySelector(".close-btn");
// let mobileMenu = document.querySelector(".mobile-menu");

// mobileMenuBtn.onclick = function () {
//   document.querySelector("body").classList.add("active");
// };

// closeBtn.onclick = function () {
//   document.querySelector("body").classList.remove("active");
// };

const toggle = document.getElementById("mobile-menu-btn");
const sidebar = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const backDrop = document.querySelector(".menu-backdrop");
const dropDown = document.querySelectorAll(".dropdown-btn");
const subMenu = document.querySelector(".sub-menu");

// document.onclick = function (e) {
//   if (
//     e.target.classList !== "mobile-menu" &&
//     e.target.classList !== "close-btn"
//   ) {
//     sidebar.classList.remove("active");
//     backDrop.classList.remove("active");
//   }
// };

toggle.onclick = function () {
  sidebar.classList.toggle("active");
  backDrop.classList.toggle("active");
};

function removeActive() {
  sidebar.classList.remove("active");
  backDrop.classList.remove("active");
}

backDrop.onclick = removeActive;
closeBtn.onclick = removeActive;

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", (e) => {
    let dropDownParent = e.target.parentElement.parentElement;
    dropDownParent.classList.toggle("showMenu");
  });
}

// COUTNDOWN

var countDownDate = new Date("Sep 23, 2023 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".time-count--day").innerHTML = days;
  document.querySelector(".time-count--hour").innerHTML = hours;
  document.querySelector(".time-count--min").innerHTML = minutes;
  document.querySelector(".time-count--sec").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// EFFECT

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    } else {
      entry.target.classList.remove("animated");
    }
  });
});

const noAnimationElements = document.querySelectorAll(".no-animation");
noAnimationElements.forEach((el) => observer.observe(el));

//

const li = document.querySelectorAll(".navbar__list-item");
const sec = document.querySelectorAll("section");

function activateMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("activeSection"));
  li[len].classList.add("activeSection");
}
activateMenu();
window.addEventListener("scroll", activateMenu);
