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

  const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });

  sr.reveal(".text", { delay: 200, origin: "top" });
  sr.reveal(".heading", { delay: 200, origin: "top" });
  sr.reveal(".ride-container .box", { delay: 400, origin: "top" });
  sr.reveal(".package-container", { delay: 200, origin: "top" });
  sr.reveal(".servicio", { delay: 200, origin: "top" });
  sr.reveal("#section-text", { delay: 200, origin: "top" });
  sr.reveal(".nav-header", { delay: 200, origin: "left" });
  sr.reveal(".tarjeta-habitacion", { delay: 200, origin: "top" });
  sr.reveal(".tarjeta-suite", { delay: 200, origin: "top" });
  // Slider para habitaciones

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
