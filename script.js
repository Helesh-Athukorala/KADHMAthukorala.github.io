// Feather icons
feather.replace();

// Example: theme toggle placeholder
document.querySelector('[data-feather="sun"]').addEventListener("click", () => {
  alert("Theme toggle coming soon!");
});

feather.replace();

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  toggle.setAttribute("data-feather", isDark ? "sun" : "moon");

  feather.replace();
});

