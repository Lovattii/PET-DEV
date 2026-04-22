let index = 0;
const wrapper = document.querySelector(".deslizo");
const slides = document.querySelectorAll(".slide");

function mostrarSlide() {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function proximoSlide() {
  index = (index + 1) % slides.length;
  mostrarSlide();
}

mostrarSlide();
setInterval(proximoSlide, 5000);