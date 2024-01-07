var menuBtn = document.querySelector("#menu");
var slider = document.querySelector(".slider");
var sliderElements = document.querySelectorAll(".slider *");

var move = 100;

slider.style.display = "none";
var sliderIsOpen = false;

menuBtn.addEventListener("click", () => {
  if (sliderIsOpen) {
    slider.style.display = "none";
    sliderIsOpen = false;
  } else {
    slider.style.display = "block";
    sliderIsOpen = true;
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 1500);
});
