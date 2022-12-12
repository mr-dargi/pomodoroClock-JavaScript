const semiCircle  = document.querySelector(".semiCircle"); 


const hr = 0;
const min = 0;
const sec = 0;

// convert time input to milliseconds
const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;

const setTime = hours + minutes + seconds;

const startTime = Date.now();

const futureTime = startTime + setTime;

