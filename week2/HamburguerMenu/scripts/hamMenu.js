const minnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    minnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});