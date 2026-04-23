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

function slideAnterior() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide();
}

document.querySelector(".prox").onclick = proximoSlide;
document.querySelector(".anterior").onclick = slideAnterior;