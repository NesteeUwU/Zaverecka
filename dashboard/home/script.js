let hamburger = document.querySelector('.hamburger');
let hamburgerMenu = document.querySelector('.hamburger-menu');
let sidebar = document.querySelector('.sidebar');
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle('change');
    if (hamburger.classList.contains('change')) {
        hamburgerMenu.classList.add('active');
        sidebar.classList.add('.vertical');
    }
    else{
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('.vertical');
    }
});