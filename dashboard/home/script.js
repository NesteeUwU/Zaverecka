let hamburger = document.querySelector('.hamburger');
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