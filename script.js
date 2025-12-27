feather.replace();

/* Dark Mode */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.body.classList.contains("dark") ? "sun" : "moon";
  toggle.innerHTML = `<i data-feather="${icon}"></i>`;
  feather.replace();
});

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));
