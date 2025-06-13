document.addEventListener("DOMContentLoaded", function () {
  const socialFlower = document.getElementById("socialFlower");
  const socialCenter = document.getElementById("socialCenter");

  // Alterna clase 'active' para mostrar/ocultar pétalos
  socialCenter.addEventListener("click", function (e) {
    e.stopPropagation();
    socialFlower.classList.toggle("active");
  });

  // Cierra la flor si se hace clic fuera
  document.addEventListener("click", function (e) {
    if (!socialFlower.contains(e.target)) {
      socialFlower.classList.remove("active");
    }
  });
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
document.addEventListener("DOMContentLoaded", function () {
  // Efecto de aparición suave al hacer scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".rp-package").forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.2
    }s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
  });
});
