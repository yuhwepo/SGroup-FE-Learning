let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let iconbtn = document.querySelector("#iconbtn");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
