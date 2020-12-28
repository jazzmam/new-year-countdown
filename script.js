const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const coutdown = document.getElementById('coutdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


function updateCoutdown() {
    const currentTime = new Date();
    const remainingTimeMiliseconds = newYearTime - currentTime;

    const days = Math.floor(remainingTimeMiliseconds / 1000 / 60 / 60 / 24);
    const hours = Math.floor(remainingTimeMiliseconds / 1000 / 60 / 60);
    const minutes = Math.floor(remainingTimeMiliseconds / 1000 / 60);
    const seconds = Math.floor(remainingTimeMiliseconds / 1000);

    console.log(seconds);
}

updateCoutdown();

