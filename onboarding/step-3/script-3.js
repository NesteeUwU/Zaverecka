const cards = document.querySelectorAll('.card');
const continueBtn = document.querySelector('.continue-button');

cards.forEach(card => {
    card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        continueBtn.classList.add('enabled');
    });
});