/* ======================================================
   MAISON CAFÉ TEMPLATE JAVASCRIPT
   Features:
   - Sticky header
   - Mobile navigation
   - Scroll reveal animations
   - Auto-close mobile menu on nav click
   ====================================================== */


// ================= STICKY HEADER =================

const siteHeader = document.getElementById("siteHeader");

function handleHeaderScroll() {
  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleHeaderScroll);
handleHeaderScroll();


// ================= MOBILE NAVIGATION =================

const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav__link");

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// ================= ACCESSIBILITY ESC CLOSE =================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    mobileToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
