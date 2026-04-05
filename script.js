// ============================================
// TYPEWRITER
// ============================================
const roles = [
  "Operation Support System Engineer",
  "Application Support Engineer",
  "Software Engineer",
  "Backend Systems Engineer"
];
const typeSpeed = 80, deleteSpeed = 40;
const pauseAfterType = 2000, pauseAfterDelete = 500;
let roleIndex = 0, letterIndex = 0, isDeleting = false;
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
window.addEventListener("load", () => { if (typeTarget) type(); });

// ============================================
// NAVBAR
// ============================================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ============================================
// SCROLL REVEAL
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".stat-card, .skill-card, .timeline-item, .project-card, .cert-card").forEach((el, i) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = `opacity 0.6s ease ${(i % 6) * 0.1}s, transform 0.6s ease ${(i % 6) * 0.1}s`;
  revealObserver.observe(el);
});

// ============================================
// SECTION TRANSITIONS
// ============================================
const overlay = document.createElement("div");
overlay.id = "transition-overlay";
document.body.appendChild(overlay);

let isTransitioning = false;

const transitionMap = {
  "#about":          "curtain",
  "#skills":         "fade",
  "#experience":     "slideup",
  "#projects":       "zoom",
  "#certifications": "curtain",
  "#contact":        "fade",
};

function doTransition(targetSelector, type) {
  if (isTransitioning) return;
  isTransitioning = true;

  const target = document.querySelector(targetSelector);
  if (!target) { isTransitioning = false; return; }

  overlay.className = `t-${type}-in`;

  setTimeout(() => {
    target.scrollIntoView({ behavior: "instant" });
    overlay.className = `t-${type}-out`;
    setTimeout(() => {
      overlay.className = "";
      isTransitioning = false;
    }, 450);
  }, 450);
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href");
    const type = transitionMap[target] || "fade";
    doTransition(target, type);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  if (link.closest(".nav-links")) return;
  link.addEventListener("click", (e) => {
    const target = link.getAttribute("href");
    if (!target || target === "#") return;
    e.preventDefault();
    doTransition(target, transitionMap[target] || "curtain");
  });
});

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
const track = document.querySelector(".marquee-track");
if (track) {
  track.addEventListener("mouseenter", () => track.style.animationPlayState = "paused");
  track.addEventListener("mouseleave", () => track.style.animationPlayState = "running");
}