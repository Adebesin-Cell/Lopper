const btnScroll = document.querySelector(".scroll__btn");
const section = document.querySelector("#section-intro");

btnScroll.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coords = section.getBoundingClientRect();

  window.scrollTo({
    top: s1coords.top + window.pageYOffset,
    left: s1coords.left + window.pageXOffset,
    behavior: "smooth",
  });
});

const sliders = document.querySelectorAll(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const counterEl = document.querySelector(".slider__current");
const totalSlidesEl = document.querySelector(".slider__total");

let currentSlide = 0;
const totalSlides = sliders.length;
counterEl.textContent = `${currentSlide + 1}`;

totalSlidesEl.textContent = totalSlides;

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide--;
  }

  counterEl.textContent = `${currentSlide + 1}`;
  showSlide(currentSlide);
};

const showSlide = function () {
  sliders.forEach((slide) => {
    slide.style.display = "none";
  });

  sliders[currentSlide].style.display = "grid";
};

showSlide(currentSlide);

const nextSlide = function () {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  counterEl.textContent = `${currentSlide + 1}`;
  showSlide(currentSlide);
};

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
