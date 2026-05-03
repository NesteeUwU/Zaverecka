let colorScheme = document.querySelector('#theme-toggle');
let colorSchemeMobile = document.querySelector('#theme-toggle-hamburger');
let divider = document.querySelector('#lightmode-divider');
let body = document.querySelector('body');
let hamburger = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let responsivity = document.querySelector('.responsivity');
let nav = document.querySelector('nav');

colorScheme.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        divider.classList.add('hidden');
    } else {
        divider.classList.remove('hidden');
    }
});
colorSchemeMobile.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        divider.classList.add('hidden');
    } else {
        divider.classList.remove('hidden');
    }
});
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle('change');
    if (hamburger.classList.contains('change')) {
        hamburgerMenu.classList.add('active');
        responsivity.classList.add('vertical');
        nav.classList.add('vertical');
    }
    else{
        hamburgerMenu.classList.remove('active');
        responsivity.classList.remove('vertical');
        nav.classList.remove('vertical');
    }
});