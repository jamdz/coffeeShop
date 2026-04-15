const showBtn = document.querySelector(".hamburger-button");
let navElement = document.querySelector("nav");

showBtn.addEventListener("click", function () {
  navElement.classList.toggle("active");
});