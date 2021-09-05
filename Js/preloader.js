const body = document.querySelector("body");
const preloader = document.querySelector(".preloader");
const images = document.querySelectorAll("img");
const progressLoader = document.querySelector(".preloader__loader");

let width = 1;

body.classList.add("no-scroll");

const loaded = function () {
  preloader.classList.add("hidden");
  body.classList.remove("no-scroll");
};

const load = function () {
  if (width === 100) {
    clearInterval(loading);
    loaded();
  } else {
    width++;
    progressLoader.style.width = `${width}%`;
  }
};

let loading = setInterval(load, 50);
