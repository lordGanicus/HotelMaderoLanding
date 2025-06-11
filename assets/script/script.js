const video = document.getElementById("bg-video");
const message = document.getElementById("audio-message");

video.addEventListener("click", () => {
  // Activar sonido si aún está silenciado
  if (video.muted) {
    video.muted = false;
    video.play();
    mostrarMensaje("🔊 Sonido activado");
    return;
  }

  // Toggle pausa/reproducción
  if (video.paused) {
    video.play();
    mostrarMensaje("▶️ Video reanudado");
  } else {
    video.pause();
    mostrarMensaje("⏸ Video pausado");
  }
});

function mostrarMensaje(texto) {
  message.textContent = texto;
  message.classList.add("visible");

  setTimeout(() => {
    message.classList.remove("visible");
  }, 2000);
}
/*************************aqui efecto del navBar************************************************/
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
/************************* efectos para los servicios**********************************************/

// Scroll Reveal

/******errores del plugin de facebook */
window.addEventListener("error", function (e) {
  if (
    e.message.includes("facebook") ||
    e.message.includes("fbcdn.net") ||
    e.filename.includes("facebook")
  ) {
    e.preventDefault();
    return false;
  }
});

// Alternativa para navegadores antiguos
window.onerror = function (msg, url, line, col, error) {
  if (url.includes("facebook.com") || url.includes("fbcdn.net")) {
    return true;
  }
  return false;
};

/********* efecto*/
