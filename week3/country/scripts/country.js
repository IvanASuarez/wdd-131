const full = document.querySelector("#full");
const year = document.querySelector("#year");
const population = document.querySelector("#population");
const capital = document.querySelector("#capital");
const language = document.querySelector("#languages");
const currency = document.querySelector("#currency");
const timezone = document.querySelector("#timeZone");
const code = document.querySelector("#code");
const internet = document.querySelector("#internet");
const temperature = document.querySelector("#temperature");
const windchill = document.querySelector("#windchill");
const windSpeed = document.querySelector("#windspeed");
const condition = document.querySelector("#condition");


const today = new Date();
const formattedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

full.innerHTML = `
    <span class="label">Last Modification:</span>
    <span class="date">${formattedDate}</span>`;

year.innerHTML = 
    `<span id="year">${today.getFullYear()}</span>`;


function windChillCalculate(temp, wind){
    const chill = 33 + (temp - 33) * (0.474 + 0.454 * Math.sqrt(wind) - 0.0454 * wind);
    return chill.toFixed(2);
}

population.textContent = "52.216.000";
capital.textContent = "Bogotà D.C";
language.textContent = "Spanish";
currency.textContent = "Colombian peso";
timezone.textContent = "UTC -5";
code.textContent = "+57";
internet.textContent = ".co";


const tempValue = 25;
const windValue = 13; // km / h
const windValueMs = windValue / 3.6; // m / s


temperature.textContent = `${tempValue} °C`;
windSpeed.textContent = `${windValue} km/h`;
condition.textContent = "Partly Cloudy";

windchill.textContent = `${windChillCalculate(tempValue, windValueMs)} °C`;