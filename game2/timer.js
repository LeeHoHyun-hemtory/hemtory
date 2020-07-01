const timerContainer = document.querySelector('.timer');
const timer = timerContainer.querySelector('div');

let seconds = 0;
let minutes = 0;
let milliSeconds = 0;
let interval = null;

function getTimer(m, s, ms){
    return `0${m} : ${s < 10 ? `0${s}` : `${s}`} : ${ms}`;
}

function showTimer(){
    milliSeconds += 1;

    if(milliSeconds === 10 && seconds < 59){
        milliSeconds = 0;
        seconds += 1;

        timer.innerHTML = getTimer(minutes, seconds, milliSeconds);
    }
    else if(milliSeconds === 10 && seconds === 59){
        milliSeconds = 0;
        seconds = 0;
        minutes += 1;

        timer.innerHTML = getTimer(minutes, seconds, milliSeconds);
    }
    else{
        timer.innerHTML = getTimer(minutes, seconds, milliSeconds);
    }
}

function timerStart(){
    minutes = seconds = milliSeconds = 0;
    timer.innerHTML = getTimer(minutes, seconds, milliSeconds);

    interval = setInterval(showTimer, 100);
}

function timerStop(){
    clearInterval(interval);

    for(let i = 0; i < 25; i++){
        document.querySelector(`#td${i}`).classList.remove('isPlaying');
    }
}