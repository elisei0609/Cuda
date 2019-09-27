function toggleBurger() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");
  burger.addEventListener("click", e => {
    nav.classList.toggle("nav--active");
  });
}
toggleBurger();

// Rotating  X Mark on burger menu

function toggleXBurger() {
  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
  });
}
toggleXBurger();
