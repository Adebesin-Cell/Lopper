//Menu selection
const menuContainer = document.querySelector(".menu__container");
const openBtn = document.querySelector(".menu__icon");

openBtn.addEventListener("click", function () {
  body.classList.add("no-scroll");
  menuContainer.classList.add("active");
});

images.forEach((image) => {
  image.loading = "lazy";
});
