// ---------- COMMON ----------
function toRegisterFunc() {
  window.location.href = "registration.html";
}

document.addEventListener("DOMContentLoaded", () => {

  // ---------- MOBILE MENU ----------
  const menuToggle = document.getElementById("mobile-menu");
  const nav = document.querySelector(".navbar nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // ---------- SMOOTH SCROLL ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ---------- SCROLL REVEAL ----------
  const sections = document.querySelectorAll("section");
  if (sections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
  }

  // ---------- EVENTS SLIDER (HOME PAGE ONLY) ----------
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");

  if (slides.length && prev && next && dotsContainer) {
    let index = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dotsContainer.appendChild(dot);
      dot.addEventListener("click", () => showSlide(i));
    });

    const dots = document.querySelectorAll(".dots span");

    function showSlide(i) {
      slides[index].classList.remove("active");
      dots[index].classList.remove("active");

      index = (i + slides.length) % slides.length;

      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }

    next.addEventListener("click", () => showSlide(index + 1));
    prev.addEventListener("click", () => showSlide(index - 1));
    setInterval(() => showSlide(index + 1), 5000);
  }

  // ---------- REGISTRATION FORM (REGISTRATION PAGE ONLY) ----------
const form = document.getElementById("registerForm");
const successBox = document.getElementById("successBox");

if (form && successBox) {
  form.addEventListener("submit", () => {
    successBox.classList.add("show");
  });
}

});

