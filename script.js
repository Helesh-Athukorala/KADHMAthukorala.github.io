document.addEventListener("DOMContentLoaded", () => {

  // Feather icons
  if (window.feather) {
    feather.replace();
  }

  // Dark mode toggle (SAFE)
  const toggle = document.getElementById("theme-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const icon = document.body.classList.contains("dark")
        ? "sun"
        : "moon";

      toggle.innerHTML = `<i data-feather="${icon}"></i>`;
      feather.replace();
    });
  }

  // Scroll reveal (SAFE)
  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback for old browsers
    reveals.forEach(el => el.classList.add("show"));
  }

});
