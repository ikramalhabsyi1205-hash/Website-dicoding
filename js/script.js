// Toggle menu mobile
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
  });
}

// Highlight menu aktif otomatis
let currentPage = window.location.pathname.split("/").pop();
if (!currentPage || currentPage.trim() === "") currentPage = "index.html";
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Validasi form
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const messageEl = document.getElementById("formMessage");
    if (messageEl) messageEl.innerText = "Pesan berhasil dikirim!";
    form.reset();
  });
}