const navToggler = document.querySelector('.navbar-toggle');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');


navToggler.addEventListener('click', function togglerClick(){
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
});

navLinks.forEach( elem => elem.addEventListener('click', function navLinkClick(){
    if(navMenu.classList.contains('open')) {
        navToggler.click();
      }
}));

