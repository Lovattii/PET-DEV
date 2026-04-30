let wrapper = document.querySelector(".deslizo");
let slides = document.querySelectorAll(".slide");

/* CLONAR AUTOMATICAMENTE */
const primeiro = slides[0];
const ultimo = slides[slides.length - 1];

const clonePrimeiro = primeiro.cloneNode(true);
const cloneUltimo = ultimo.cloneNode(true);

wrapper.appendChild(clonePrimeiro);
wrapper.insertBefore(cloneUltimo, wrapper.firstChild);

/* atualizar lista */
slides = document.querySelectorAll(".slide");

let index = 1;
let animando = false;

function mostrarSlide(animar = true) {
  wrapper.style.transition = animar
    ? "transform 0.6s ease-in-out"
    : "none";

  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function proximoSlide() {
  if (animando) return;

  animando = true;
  index++;
  mostrarSlide();
}

function slideAnterior() {
  if (animando) return;

  animando = true;
  index--;
  mostrarSlide();
}

/* AJUSTE AUTOMÁTICO AO FINAL DA ANIMAÇÃO */
wrapper.addEventListener("transitionend", () => {
  if (index === slides.length - 1) {
    index = 1;
    mostrarSlide(false);
  }

  if (index === 0) {
    index = slides.length - 2;
    mostrarSlide(false);
  }

  animando = false;
});

/* PASSAGEM DE SLIDES COM BOTÕES */
document.querySelector(".prox").onclick = proximoSlide;
document.querySelector(".anterior").onclick = slideAnterior;

/* AUTOPLAY DE SLIDES APÓS INTERVALO | TRAVA COM MOUSE */

let autoplay = setInterval(proximoSlide, 3000);

wrapper.addEventListener("mouseenter", () => {
  clearInterval(autoplay);
});

wrapper.addEventListener("mouseleave", () => {
  autoplay = setInterval(proximoSlide, 3000);
});

/* POSIÇÃO INICIAL CORRETA */
mostrarSlide(false);