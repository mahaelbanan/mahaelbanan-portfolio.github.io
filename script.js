// ============================================
// TYPEWRITER EFFECT
// ============================================
const roles = [
  "Operation Support System Engineer",
  "Network Development Engineer",
  "L2 Application Support Engineer",
  "Software Engineer",
];

const typeSpeed = 80;
const deleteSpeed = 40;
const pauseAfterType = 2000;
const pauseAfterDelete = 500;

let roleIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typeTarget = document.getElementById("typewriter");

function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typeTarget.textContent = currentRole.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typeTarget.textContent = currentRole.substring(0, letterIndex + 1);
    letterIndex++;
  }
  if (!isDeleting && letterIndex === currentRole.length) {
    setTimeout(() => { isDeleting = true; type(); }, pauseAfterType);
    return;
  }
  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, pauseAfterDelete);
    return;
  }
  setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
}

window.addEventListener("load", () => {
  if (typeTarget) type();
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ============================================
// SCROLL FADE-IN
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));