document.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/paginas/navbar.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("nav-center").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar navbar:", error));

  fetch("/assets/paginas/footer-top.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-top").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar footer:", error));
  fetch("/assets/paginas/footer-bottom.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-bottom").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar footer:", error));

  // Slider para habitaciones
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1000, // Más rápido que 2500
    delay: 200,
    reset: false, // ¡Importante! Evita repetir animaciones
    easing: "ease-in-out",
  });

  // Agrupamos elementos con origen similar
  sr.reveal(
    ".text, .heading, .package-container, .servicio, #section-text, .tarjeta-habitacion, .tarjeta-suite",
    {
      origin: "top",
    }
  );

  sr.reveal(".ride-container .box", {
    delay: 300,
    origin: "bottom",
  });

  sr.reveal(".nav-header", {
    delay: 300,
    origin: "left",
  });
  // Sliders para habitaciones estándar
  const sliders = document.querySelectorAll(".slider-habitacion");

  sliders.forEach((slider) => {
    const images = slider.querySelector(".imagenes-slider");
    const prevBtn = slider.querySelector(".anterior");
    const nextBtn = slider.querySelector(".siguiente");
    let currentIndex = 0;

    function updateSlider() {
      images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % 3;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + 3) % 3;
      updateSlider();
    });
  });
  /***********movimiento de slider  */
  const suiteSliders = document.querySelectorAll(".slider-suite");

  suiteSliders.forEach((slider) => {
    const images = slider.querySelector(".imagenes-suite-slider");
    const prevBtn = slider.querySelector(".anterior-suite");
    const nextBtn = slider.querySelector(".siguiente-suite");
    let currentIndex = 0;

    function updateSlider() {
      images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % 3;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + 3) % 3;
      updateSlider();
    });

    // Auto-avance opcional
    setInterval(() => {
      currentIndex = (currentIndex + 1) % 3;
      updateSlider();
    }, 3500);
  });
  /************************slider para restaurante **********************/
  document.querySelectorAll(".restaurante-card").forEach((card) => {
    const slider = card.querySelector(".restaurante-slider");
    const imgContainer = slider.querySelector(".restaurante-img-large");
    const prevBtn = card.querySelector(".restaurante-prev");
    const nextBtn = card.querySelector(".restaurante-next");
    const images = imgContainer.querySelectorAll("img");

    let currentIndex = 0;
    const totalImages = images.length;

    function updateSlider() {
      imgContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateSlider();
    });

    // Auto-slide
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateSlider();
    }, 3500);
  });
});
