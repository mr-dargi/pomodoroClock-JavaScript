const semiCircle  = document.querySelectorAll(".semiCircle"); 
const timer = document.querySelector(".timer");


const hr = 0;
const min = 0;
const sec = 10;

// convert time input to milliseconds
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;

const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;


function countDownTimer() {
    const currentTime = Date.now(); 
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;

    if(angle > 180) {
        semiCircle[2].style.display = 'none';
        semiCircle[0].style.transform = "rotate(180deg)";
        semiCircle[1].style.transform = `rotate(${angle}deg)`;
    }else {
        semiCircle[2].style.display = 'block';
        semiCircle[0].style.transform = `rotate(${angle}deg)`;
        semiCircle[1].style.transform = `rotate(${angle}deg)`;
    }

    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((remainingTime / (1000 * 60 )) % 60);
    const secs = Math.floor((remainingTime / (1000)) % 60);

    timer.innerHTML = `
    <div>${hrs}</div>
    <div class="colon">:</div>
    <div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    `

    if(remainingTime < 0) {
        clearInterval(timerLoop);
        semiCircle[2].style.display = 'none';
        semiCircle[0].style.display = 'none';
        semiCircle[1].style.display = 'none';
    }
}

const timerLoop = setInterval(countDownTimer);
countDownTimer();
