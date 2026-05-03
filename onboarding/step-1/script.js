const cards = document.querySelectorAll('.card');
const continueBtn = document.querySelector('.continue-button');
let colorScheme = document.querySelector('#theme-toggle');
let body = document.querySelector('body');

cards.forEach(card => {
    card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        continueBtn.classList.add('enabled');
    });
});
colorScheme.addEventListener('click', function() {
    body.classList.toggle('light-mode');
});