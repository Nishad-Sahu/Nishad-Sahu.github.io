const header = document.querySelector("[data-header]");
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-menu");
const year = document.querySelector("#year");

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
