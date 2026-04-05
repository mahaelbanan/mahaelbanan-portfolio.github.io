// ============================================
// GSAP + SCROLLTRIGGER ANIMATIONS
// ============================================
gsap.registerPlugin(ScrollTrigger);

// ============================================
// TYPEWRITER EFFECT
// ============================================
const roles = [
  "Operation Support System Engineer",
  "Application Support Engineer",
  "Software Engineer",
  "Backend Systems Engineer"
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
// HERO ANIMATIONS
// ============================================
gsap.from(".hero-tag", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.2,
  ease: "power3.out"
});

gsap.from(".hero-name-line", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  delay: 0.4,
  stagger: 0.15,
  ease: "power4.out"
});

gsap.from(".hero-meta", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.9,
  ease: "power3.out"
});

gsap.from(".hero-desc", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 1.1,
  ease: "power3.out"
});

gsap.from(".hero-cta .btn", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 1.3,
  stagger: 0.1,
  ease: "power3.out"
});

// ============================================
// ABOUT — words slide up from mask
// ============================================
gsap.from("#about .section-label", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power3.out"
});

gsap.from("#about .section-title", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 75%",
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power4.out"
});

gsap.from("#about .section-divider", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
  },
  scaleX: 0,
  transformOrigin: "left center",
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".stat-card", {
  scrollTrigger: {
    trigger: ".about-stats",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from(".about-right p", {
  scrollTrigger: {
    trigger: ".about-right",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out"
});

// ============================================
// SKILLS — cards fly in from bottom
// ============================================
gsap.from("#skills .section-title", {
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  ease: "power4.out"
});

gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 60,
  duration: 0.7,
  stagger: 0.1,
  ease: "power3.out"
});

// ============================================
// EXPERIENCE — slide in from left
// ============================================
gsap.from("#experience .section-title", {
  scrollTrigger: {
    trigger: "#experience",
    start: "top 80%",
  },
  opacity: 0,
  x: -60,
  duration: 1,
  ease: "power4.out"
});

gsap.from(".timeline-item", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".timeline::before", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
  },
  scaleY: 0,
  transformOrigin: "top center",
});

// ============================================
// PROJECTS — dramatic reveal
// ============================================
gsap.from("#projects .section-title", {
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power4.out"
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 80,
  scale: 0.95,
  duration: 0.9,
  stagger: 0.2,
  ease: "power3.out"
});

// ============================================
// CERTIFICATIONS — cascade from bottom
// ============================================
gsap.from("#certifications .section-title", {
  scrollTrigger: {
    trigger: "#certifications",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  ease: "power4.out"
});

gsap.from(".cert-card", {
  scrollTrigger: {
    trigger: ".certs-grid",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 0.6,
  stagger: 0.08,
  ease: "power3.out"
});

// ============================================
// CONTACT — scale up from center
// ============================================
gsap.from(".contact-inner", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 75%",
  },
  opacity: 0,
  y: 60,
  scale: 0.97,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".contact-link", {
  scrollTrigger: {
    trigger: ".contact-links",
    start: "top 85%",
  },
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  ease: "power3.out"
});

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
const track = document.querySelector(".marquee-track");
if (track) {
  track.addEventListener("mouseenter", () => {
    track.style.animationPlayState = "paused";
  });
  track.addEventListener("mouseleave", () => {
    track.style.animationPlayState = "running";
  });
}

// ============================================
// PARALLAX ON ORBS
// ============================================
gsap.to(".orb-1", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  },
  y: -200,
  ease: "none"
});

gsap.to(".orb-2", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 3,
  },
  y: -150,
  ease: "none"
});

gsap.to(".orb-3", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 2.5,
  },
  y: -100,
  ease: "none"
});