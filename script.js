const typed = new Typed('#descrip', {
  strings:["Engineer", "Frontend Developer", "Software Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
