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

const label = () => {
  const form = document.querySelector(".contact__form");
  form.addEventListener("change", function(e) {
    if (e.target.classList.contains("label__input")) {
      e.target.closest(".label").style.color = "transparent";
      e.target.previousElementSibling.style.color = "transparent";
      if (e.target.value == "") {
        e.target.closest(".label").style.color = "";
        e.target.previousElementSibling.style.color = "";
      }
    }
  });
};
label();

const focus = () => {
  const area = document.querySelector(".area__input");
  area.addEventListener("focus", function(e) {
    if (this.parentNode.classList.contains("area__star")) {
      this.placeholder = "";
      this.parentNode.classList.remove("area__star");
    }
  });
};
focus();

const blur = () => {
  const area = document.querySelector(".area__input");
  area.addEventListener("blur", function(e) {
    if (this.value == "") {
      this.placeholder = "Your Message";
      this.parentNode.classList.add("area__star");
    }
  });
};

blur();
