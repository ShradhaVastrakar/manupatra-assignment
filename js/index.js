 const toggler = document.querySelector('.navbar-toggler');
  const navMenu = document.getElementById('navbarNav');
  const overlay = document.getElementById('navOverlay');

  toggler.addEventListener('click', () => {
  
    setTimeout(() => {
      if (navMenu.classList.contains('show')) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    }, 150);
  });

  
  overlay.addEventListener('click', () => {
    toggler.click();
  });