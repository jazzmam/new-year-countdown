const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const coutdownElement = document.getElementById('coutdown');
const yearElement = document.getElementById('year');
const spinnerElement = document.getElementById('spinner');

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set Title-year
yearElement.innerHTML = nextYear;


function updateCoutdown() {
    const currentTime = new Date();
    const remainingTimeMiliseconds = newYearTime - currentTime;

    const daysRemaining = Math.floor(remainingTimeMiliseconds / 1000 / 60 / 60 / 24);
    const hoursRemaining = Math.floor(remainingTimeMiliseconds / 1000 / 60 / 60) % 24;
    const minutesRemaining = Math.floor(remainingTimeMiliseconds / 1000 / 60) % 60;
    const secondsRemaining = Math.floor(remainingTimeMiliseconds / 1000) % 60;

    daysElement.innerHTML = daysRemaining;
    hoursElement.innerHTML = hoursRemaining;
    minutesElement.innerHTML = minutesRemaining;
    secondsElement.innerHTML = secondsRemaining;
}

// Show spinner before loading
setTimeout(() => {
    spinnerElement.remove();
}, 1000);

setInterval(updateCoutdown, 1000);
