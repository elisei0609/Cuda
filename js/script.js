const toggleBurger = () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  burger.addEventListener("click", e => {
    nav.classList.toggle("nav--active");
  });
};
toggleBurger();

// Rotating  X Mark on burger menu

const toggleXBurger = () => {
  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
};
toggleXBurger();

// Checking section to scroll visible

const isVisible = elem => {
  if (
    elem.getBoundingClientRect().top + window.pageYOffset - 150 <=
    window.pageYOffset
  ) {
    return true;
  }
  return;
};

// Add class for animation when scrolled to section, and removing scroll listener
const addClass = () => {
  const list = document.getElementById("skillsList");
  list.classList.add("skillsAnimation");
  document.removeEventListener("scroll", scroll, false);
};

// 

const scroll = () => {
  const elem = document.getElementById("skillsSection");
  isVisible(elem) ? addClass() : false;
};

// Adding scroll listener and with a scroll function

document.addEventListener("scroll", scroll);
