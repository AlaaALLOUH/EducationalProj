document.addEventListener('DOMContentLoaded', function() {
    var toggleBtn = document.getElementById('menu-toggle');
    var nav = document.getElementById('main-nav');
    var navRight = document.getElementById('nav-right');
  
    toggleBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
      navRight.classList.toggle('active');
    });
  });
  