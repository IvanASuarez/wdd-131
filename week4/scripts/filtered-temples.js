const minnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const homebutton = document.querySelector('#active');
const oldbutton = document.querySelector('#old');
const newbutton = document.querySelector('#new');
const largebutton = document.querySelector("#large");
const smallbutton = document.querySelector("#small");
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


const temples = [
  {
    templeName: "Bogotá Temple",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7732.jpg"
  },
  {
    templeName: "Barranquilla Temple",
    location: "Barranquilla, Atlantico, Colombia",
    dedicated: "2018, December, 9",
    area: 25349,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846.jpg"
  },
  {
    templeName: "Buenos Aires Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087.jpg"
  },
  {
    templeName: "Mendoza Temple",
    location: "Mendoza, Argentina",
    dedicated: "2024, September, 22",
    area: 74792,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mendoza-argentina-temple/mendoza-argentina-temple-51739.jpg"
  },
  {
    templeName: "Preston Temple",
    location: "Preston, England",
    dedicated: "1998, June, 7",
    area: 69630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357.jpg"
  },
  {
    templeName: "Córdoba Temple",
    location: "Córdoba, Argentina",
    dedicated: "2015, May, 15",
    area: 34369,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-11093.jpg"
  },
  {
    templeName: "Salta Temple ",
    location: "Salta, Argentina",
    dedicated: "2024, June, 16",
    area: 27000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48236.jpg"
  },
  {
    templeName: "Bahia Blanca",
    location: "Bahia Blanca, Argentina",
    dedicated: "2025, November, 23",
    area: 19000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-57231.jpg"
  },
  {
    templeName: "Paris Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2054.jpg"
  },
  {
    templeName: "Guatemala City Temple",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 14",
    area: 11610,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6407.jpg"
  },
  {
    templeName: "México City Temple",
    location: "México City, México",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-20740.jpg"
  },
  {
    templeName: "Fresno California Temple",
    location: "Fresno, California, United States",
    dedicated: "2000, April, 9",
    area: 10850,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fresno-california-temple/fresno-california-temple-50644.jpg"
  },
]

function createTempleCard(templesArray){
    const container = document.getElementById("templesContainer");
    container.innerHTML = "";
    
    templesArray.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location: </strong> ${temple.location}</p>
            <p><strong>Dedicated: </strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img 
              src="${temple.imageUrl}" 
              srcset="${temple.imageUrl}?w=350 350w, ${temple.imageUrl}?w=700 700w" 
              sizes="(max-width: 600px) 350px, 700px"
              alt="Image of ${temple.templeName}" 
              loading="lazy" 
              width="350">
            `;

        container.appendChild(card);
    })
}

createTempleCard(temples);


oldbutton.addEventListener('click', (e) =>{
  e.preventDefault();
  const filtered = temples.filter(t =>{
  const year = parseInt(t.dedicated.split(",")[0]);
  return year <= 2000;
  });

  createTempleCard(filtered);

}); 

newbutton.addEventListener('click',(e) =>{
  e.preventDefault();
  const filterNew = temples.filter(t =>{
    const year = parseInt(t.dedicated.split(",")[0]);
    return year > 2000;
  });

  createTempleCard(filterNew);
})

largebutton.addEventListener('click', (e) => {
  e.preventDefault();
  const filterLarge = temples.filter(t =>{
    const largeSize = parseInt(t.area);
    return largeSize > 50000;
  });

  createTempleCard(filterLarge);
})

smallbutton.addEventListener('click', (e) => {
  e.preventDefault();
  const filterSmall = temples.filter(t =>{
    const smallSize = parseInt(t.area);
    return smallSize <= 50000;
  });

  createTempleCard(filterSmall);
})

homebutton.addEventListener('click',(e) =>{
    e.preventDefault();
    createTempleCard(temples);
})