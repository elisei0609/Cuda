
function toggleBurger (){
   const burger = document.getElementById('burger');
   const nav = document.getElementById('nav');
   burger.addEventListener('click', (e) => {
      nav.classList.toggle('nav--active')
   })
   
};
toggleBurger();
