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
    }, 3000);
  });
});
