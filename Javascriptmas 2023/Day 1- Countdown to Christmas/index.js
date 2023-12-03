const countdownDisplay = document.getElementById("countdown-display");
const countdownDetails = document.getElementById("countdown-details");
const countdownPhoto = document.getElementById("countdown-photo");
let remainingDays;
function renderCountdown() {
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const christmas = 25;
    const date = new Date();
    const todayCount = date.toLocaleString('default', { 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    const [days, time] = todayCount.split(',');
    remainingDays = christmas - days;
    countdownDisplay.innerText = remainingDays;
    const [hours = 24, minutes = 61, seconds = 61] = time.split(':');
    countdownDetails.innerHTML = `${23 - hours}:${60 - minutes}:${60 - seconds}`;
}
renderCountdown();
// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
const renderInterval = setInterval(renderCountdown, 1000);
if(remainingDays<0){
    countdownDisplay.innerText = 0;
    countdownPhoto.classList.remove('hidden');
    countdownDetails.innerText = `00:00:00`;
    clearInterval(renderInterval);
}