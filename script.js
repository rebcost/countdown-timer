// Var constates dia, hora, minutos, segundos

const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minEl = document.getElementById("min")
const segEl = document.getElementById("seg")

// Definindo o dia da contagem
const newYears = "1 Jan 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor(newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
      
    daysEl.innerHTML =  days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML =   minutes;
    segEl.innerHTML =   seconds;

}

// Chamando a função
countdown();

setInterval(countdown,1000);
