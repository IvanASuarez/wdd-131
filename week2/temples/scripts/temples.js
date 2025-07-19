const minnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const headerTitle = document.querySelector('header h1');
const full = document.querySelector("#full");
const year = document.querySelector("#year");

const today = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

hambutton.addEventListener('click', () => {
    minnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    headerTitle.classList.toggle('hidden');
});

full.innerHTML = `
    <span class="label">Last Modification:</span>
    <span class="date">${formattedDate}</span>`;

year.innerHTML = 
    `<span id="year">${today.getFullYear()}</span>`;
