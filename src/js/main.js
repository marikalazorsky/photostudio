window.addEventListener('load', init);

function init() {
 
  function toggleClasses() {
   document.querySelector('.burger-menu span').classList.toggle('active');
   document.querySelector('.header-top nav').classList.toggle('open');
  }

  document.querySelector('.burger-menu').addEventListener('click', function() {
   toggleClasses();
  })
}

