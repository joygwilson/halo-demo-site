// ============================
// HALO COLLAR DEMO — script.js
// ============================

document.addEventListener("DOMContentLoaded", () => {

  // --- Sticky nav shadow on scroll ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 10
      ? "0 2px 20px rgba(0,0,0,0.08)"
      : "none";
  });

  // --- Animate sections on scroll (fade-in) ---
  const animatedEls = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedEls.forEach(el => observer.observe(el));

  // --- Smooth CTA scroll (if any anchor links) ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
