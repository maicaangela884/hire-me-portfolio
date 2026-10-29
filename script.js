const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader);
updateHeader();

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuBtn.textContent = navMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
