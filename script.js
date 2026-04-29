let colorScheme = document.querySelector('#theme-toggle');
let divider = document.querySelector('#lightmode-divider');
let body = document.querySelector('body');

colorScheme.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        divider.classList.add('hidden');
    } else {
        divider.classList.remove('hidden');
    }
});