// images setup
const images = [
  "https://i.ibb.co/W4Ndq1RG/Recepcion-Fondo-Grande.jpg",
  "https://i.ibb.co/QvP9WckT/Suit-Familiar-Grande.jpg",
  "https://i.ibb.co/d4v7YtVC/Urban-Sky-Grande.jpg",
];
// content setup
const texts = [
  [
    "Elegancia y comodidad",
    "un ambiente acogedor que te hace sentir como en casa desde tu llegada.",
  ],
  [
    "Moderno y confortable",
    "Relájate en un ambiente tranquilo con camas cómodas, baño privado. Cada detalle pensado para tu comodidad.",
  ],
  [
    "Sabores únicos con la mejor vista",
    "Disfruta de desayuno buffet, almuerzos o cenas. Un espacio deal para saborear y relajarte.",
  ],
];

rgbKineticSlider = new rgbKineticSlider({
  // images and content sources
  slideImages: images, // array of images > demo size : 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  // displacement images sources
  backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg", // slide displacement image
  cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png", // cursor displacement image

  // cursor displacement effect
  cursorImgEffect: true, // enable cursor effect
  cursorTextEffect: false, // enable cursor text effect
  cursorScaleIntensity: 0.65, // cursor effect intensity
  cursorMomentum: 0.14, // lower is slower

  // swipe
  swipe: true, // enable swipe
  swipeDistance: window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 2, // scale intensity during swipping

  // slide transition
  slideTransitionDuration: 1, // transition duration
  transitionScaleIntensity: 30, // scale intensity during transition
  transitionScaleAmplitude: 160, // scale amplitude during transition

  // regular navigation
  nav: true, // enable navigation
  navElement: ".main-nav", // set nav class

  // image rgb effect
  imagesRgbEffect: true, // enable img rgb effect
  imagesRgbIntensity: 0.9, // set img rgb intensity
  navImagesRgbIntensity: 80, // set img rgb intensity for regular nav

  // texts settings
  textsDisplay: true, // show title
  textsSubTitleDisplay: true, // show subtitles
  textsTiltEffect: true, // enable text tilt
  googleFonts: ["Playfair Display:700", "Roboto:400"], // select google font to use
  buttonMode: false, // enable button mode for title
  textsRgbEffect: true, // enable text rgb effect
  textsRgbIntensity: 0.03, // set text rgb intensity
  navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

  textTitleColor: "white",
  textTitleSize: 100,
  mobileTextTitleSize: 90,
  textTitleLetterspacing: 2,
  textTitleOffsetTop: -30,
  mobileTextTitleOffsetTop: -30,

  textSubTitleColor: "white",
  textSubTitleSize: 35,
  mobileTextSubTitleSize: 21,
  textSubTitleLetterspacing: 2,
  textSubTitleOffsetTop: 190,
  mobileTextSubTitleOffsetTop: 110,
});

let currentIndex = 0;
const totalSlides = images.length;
let autoSlideTimeout;
const slideDelay = 3000; // 3 segundos
let isPaused = false;

function goToSlide(index) {
  const navButtons = document.querySelectorAll(".navNextPrev a");
  if (navButtons.length >= 2) {
    const isNext =
      index > currentIndex || (index === 0 && currentIndex === totalSlides - 1);
    const targetButton = isNext ? navButtons[1] : navButtons[0]; // next : prev
    targetButton.click();
  }
  currentIndex = index;
  scheduleNextSlide();
}

function nextSlide() {
  if (!isPaused) {
    goToSlide((currentIndex + 1) % totalSlides);
  }
}

function scheduleNextSlide() {
  clearTimeout(autoSlideTimeout);
  if (!isPaused) {
    autoSlideTimeout = setTimeout(nextSlide, slideDelay);
  }
}

// 3. Control de interacciones
function pauseAutoSlide() {
  isPaused = true;
  clearTimeout(autoSlideTimeout);
}

function resumeAutoSlide() {
  if (isPaused) {
    isPaused = false;
    scheduleNextSlide();
  }
}

// Event listeners
const sliderContainer = document.getElementById("rgbKineticSlider");
const navButtons = document.querySelectorAll("nav a");

// Pausar durante interacciones
sliderContainer.addEventListener("mousedown", pauseAutoSlide);
sliderContainer.addEventListener("touchstart", pauseAutoSlide);
sliderContainer.addEventListener("mouseenter", pauseAutoSlide);

// Reanudar después de interacciones
sliderContainer.addEventListener("mouseup", resumeAutoSlide);
sliderContainer.addEventListener("touchend", resumeAutoSlide);
sliderContainer.addEventListener("mouseleave", resumeAutoSlide);

// Reiniciar después de navegación manual
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTimeout(resumeAutoSlide, slideDelay);
  });
});

// 4. Iniciar
scheduleNextSlide();

// 5. Función de ayuda para debug
function debugSlider() {
  console.log("Current Index:", currentIndex);
  console.log("Is Paused:", isPaused);
  console.log("Slider Instance:", kineticSlider);
}

/*************************aqui efecto del navBar************************************************/
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
/************************* efectos para los servicios**********************************************/

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".heading", { delay: 200, origin: "top" });
sr.reveal(".ride-container .box", { delay: 400, origin: "top" });

// Scroll Reveal
