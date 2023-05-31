//menu hamburguesa

const barsMenu = document.querySelector(".bars__menu");
barsMenu.addEventListener("click", () => {
  barsMenu.classList.toggle("active");
  const navbar = document.querySelector(".nav__bar-links");
  navbar.classList.toggle("nav_open");
  if (barsMenu.classList.contains("active")) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "auto";
  }
});