// Loader

const loader = document.getElementById("preloader");

function loadingPage() {
  loader = setTimeout(showPage, 3000);
}

function showPage() {
  loader.style.display = "none";
}

// MOBILE MENU
const toggle = document.getElementById("mobile-menu-btn");
const sidebar = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const backDrop = document.querySelector(".menu-backdrop");
const dropDown = document.querySelectorAll(".dropdown-btn");
const subMenu = document.querySelector(".sub-menu");

toggle.onclick = function () {
  sidebar.classList.toggle("active");
  backDrop.classList.toggle("active");
  document.querySelector("body").style.overflow = `hidden`;
};

function removeActive() {
  sidebar.classList.remove("active");
  backDrop.classList.remove("active");
  document.querySelector("body").style.overflow = `auto`;
}

backDrop.onclick = removeActive;
closeBtn.onclick = removeActive;

// Show submenu mobile

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function (e) {
    e.preventDefault();

    const container = document.getElementById(this.dataset.container);
    const dropDownParent = e.target.parentElement;

    // console.log(container);

    if (!container.classList.contains("active")) {
      container.classList.add("active");
      container.style.height = "auto";
      dropDownParent.classList.toggle("active");

      let height = container.clientHeight + "px";

      container.style.height = "0px";

      setTimeout(function () {
        container.style.height = height;
      }, 0);
    } else {
      container.style.height = "0px";
      dropDownParent.classList.remove("active");

      container.addEventListener(
        "transitionend",
        function () {
          container.classList.remove("active");
        },
        {
          once: true,
        }
      );
    }
  });
}

// COUNTDOWN

const countDownDate = new Date("Sep 23, 2023 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".time-count--day").innerHTML = days;
  document.querySelector(".time-count--hour").innerHTML = hours;
  document.querySelector(".time-count--min").innerHTML = minutes;
  document.querySelector(".time-count--sec").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// ANIMATION

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

// Active Header

const sectionElements = document.querySelectorAll(".section--active");
let navigationItems = document.querySelectorAll(".navbar__list-item");
navigationItems = Array.from(navigationItems);
let navigationItemsCutted = [];
navigationItems.map((el, index) => {
  if (index !== 4) {
    navigationItemsCutted.push(el);
  }
});

const observerSection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const itemActive = document.querySelector(".navbar__list-item.active");
      if (itemActive) {
        itemActive.classList.remove("active");
      }
      let index = 0;
      sectionElements.forEach((el, subIndex) => {
        if (el === entry.target) {
          index = subIndex;
        }
      });
      navigationItemsCutted[index].classList.add("active");
    }
  });
});
sectionElements.forEach((el) => observerSection.observe(el));

// Fixed Header

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector(".header").classList.add("header__fixed");
  } else {
    document.querySelector(".header").classList.remove("header__fixed");
  }
});

// Scroll to top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

// Slider
(async () => {
  let i = 1;
  const interval = 5000;
  const paddingRight = 19;
  const slidesWrapper = document.querySelector(".choose__container-wrapper");
  const slides = document.querySelectorAll(".choose-box");
  const bar = document.querySelector(".progress-bar");
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const movLeft = (el, mov) =>
    new Promise((r) => {
      el.ontransitionend = () => {
        el.ontransitionend = null;
        el.style.transition = "none";
        r();
      };
      el.style.transition = "1s";
      el.style.transform = `translateX(${-mov}px)`;

      if (i > 6) {
        i = 0;
      }
      width = `16.66666%*${i}`;
      bar.style.width = `calc(${width})`;
      i++;
    });

  let index = 0;

  while (true) {
    await delay(interval);
    await movLeft(slidesWrapper, slides[index].clientWidth + paddingRight);

    slidesWrapper.appendChild(slides[index]);
    slidesWrapper.style.transform = `translateX(0)`;
    index = ++index % slides.length;
  }
})();

// Sale Tab

const chartContent1 = document.querySelectorAll(".nav-content")[0];
const chartContent2 = document.querySelectorAll(".nav-content")[1];
const chartNavLink1 = document.querySelectorAll(
  ".chart-nav .chart-nav-item"
)[0];
const chartNavLink2 = document.querySelectorAll(
  ".chart-nav .chart-nav-item"
)[1];

function openTab2() {
  chartContent1.classList.toggle("fade");
  chartContent2.classList.toggle("open");
  chartNavLink1.classList.toggle("fade");
  chartNavLink2.classList.toggle("open");
}

function openTab1() {
  chartContent1.classList.remove("fade");
  chartContent2.classList.remove("open");
  chartNavLink1.classList.remove("fade");
  chartNavLink2.classList.remove("open");
}
