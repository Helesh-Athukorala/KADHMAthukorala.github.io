
document.addEventListener("DOMContentLoaded", () => {
  // Feather icons
  if (window.feather) feather.replace();

  // Dark mode toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const icon = document.body.classList.contains("dark") ? "sun" : "moon";
      toggle.innerHTML = `<i data-feather="${icon}"></i>`;
      feather.replace();
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback
    reveals.forEach(el => el.classList.add("show"));
  }
});

// Back to top button
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  // Feather icons
  if (window.feather) feather.replace();

  const toggle = document.getElementById("theme-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Update icon
    const iconName = document.body.classList.contains("dark") ? "sun" : "moon";
    toggle.innerHTML = `<i data-feather="${iconName}"></i>`;
    feather.replace();
  });
});
