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
        semiCircle[2].style.display = 'inline-block';
        semiCircle[0].style.transform = `rotate(${angle}deg)`;
        semiCircle[1].style.transform = `rotate(${angle}deg)`;
    }

    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    const mins = Math.floor((remainingTime / (1000 * 60 )) % 60).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
    const secs = Math.floor((remainingTime / (1000)) % 60).toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});

    timer.innerHTML = `${hrs} : ${mins} : ${secs}`;

    if(remainingTime <= 6000) {
        semiCircle[0].style.backgroundColor = 'red';
        semiCircle[1].style.backgroundColor = 'red';
        }

    if(remainingTime < 0) {
        clearInterval(timerLoop);
        semiCircle[2].style.display = 'none';
        semiCircle[0].style.display = 'none';
        semiCircle[1].style.display = 'none';

        timer.innerHTML = timer.innerHTML = "00 : 00 : 00"
    }
}

const timerLoop = setInterval(countDownTimer);
countDownTimer();
