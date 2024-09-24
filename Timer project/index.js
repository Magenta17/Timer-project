
const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    display.textContent = '00:00:00:00';
    isRunning = false;
}

function stop(){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime /3600000);
    let minutes = Math.floor(elapsedTime / 60000 %60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(2, '0');


    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    console.log(display.textContent);
}