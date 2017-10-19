// Select nasa div for loading in cool stuff!
const nasa = document.querySelector('.nasa');

// URL Contents
const base = 'https://api.nasa.gov/planetary/apod';
const key = 'NRXIFpWntc6t9iwr2Mz30m47jiDx9TwaBY2bWmsV';

// Number generator
const n = (min, max) => {
  // Create a random number within the minimum and maximum passed in
  const rando = Math.floor(Math.random() * (max - min + 1) + min);
  // Add a zero to the month/days to satisfy the API's requirement YYYY-MM-DD
  switch (rando.toString().length) {
    case 1:
      return `0${rando}`;
      break;
    default:
      return `${rando}`;
  }
};

// Our promise to fetch JSON data.
// We'll pass in the NASA URL when we invoke it below in switchImage()
const getThatData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => data.json())
      .then(json => {
        if (json) {
          resolve(json);
        } else {
          nasa.textContent = 'Busted API! Check Console.';
        }
    }).catch(error => Error('API Broke! Check URL'))
  })
}

// Main function holding the URL, called both on pageload and any click on page
const switchImage = () => {
  getThatData(`${base}?api_key=${key}&date=${n(2000, 2016)}-${n(1, 12)}-${n(1, 28)}`)
    .then(data => insertImage(data))
    .catch(error => console.error('API Failed!'))
}

// Take the data and use it on the page!
const insertImage = (data) => {
  if (data.media_type === 'image') {
    nasa.style.background = `url(${data.url}) no-repeat center`;
    nasa.style.backgroundSize = `cover`;
    nasa.textContent = data.title;
    document.title = data.title;
  }
}

// Switch image on click, plus load it instantly
nasa.addEventListener('click', switchImage);
window.addEventListener('load', () => switchImage());