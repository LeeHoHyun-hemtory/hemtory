const numbers = document.querySelectorAll('td');
const btnStop = document.querySelector('.btnStop');
const record = document.querySelector('.record');

let currentNum = 0;
let isPlaying = true;

function startGame(){
    if(isPlaying){
        isPlaying = false;

        const length = numbers.length;
    
        currentNum = 0;
    
        for(let i = 0; i < length; i++){
            numbers[i].addEventListener('click', numClick);
        }
    }
}

function numClick(event){
    event.preventDefault();

    if((currentNum + 1) === parseInt(event.target.innerText) && event.target.className === 'isPlaying'){
        currentNum += 1;
        event.target.innerText = '';
    }
    
    if(currentNum === 25){
        isPlaying = true;
        isTimer = true;
        isGenRandomNum = true;
        timerStop();
        record.innerHTML = `기록 : ${timer.innerHTML}`;
        modalContainer.classList.add('modalOn');
    }
}