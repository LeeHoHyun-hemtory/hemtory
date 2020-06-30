const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function handleModify(event){
    event.preventDefault();
    const currentUser = localStorage.getItem(USER_LS);

    greeting.classList.remove(SHOWING_CN);
    form.classList.add(SHOWING_CN);

    input.value = currentUser;
}

function askForName(){
    form.classList.add(SHOWING_CN);
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = input.value;

    paintGreeting(currentValue);

    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
    
    form.addEventListener('submit', handleSubmit);
    
    greeting.addEventListener('click', handleModify);
}

function init(){
    loadName();
}

init();