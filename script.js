// ========== NAVBAR STICKY EFFECT ==========
const navbar = document.getElementById('navbar');
const aboutSection = document.getElementById('about-me');

window.addEventListener('scroll', () => {
  const sectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
  if (window.scrollY >= sectionBottom) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

<div class="project-slide" data-link="projects/new-project.html">
  <img src="images/new-project.jpg" alt="New Project">
  <p>My New Engineering Project</p>
</div>

