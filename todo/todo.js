const todoForm = document.querySelector('.js-todoForm');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.js-todoList');

const TODOS_LS = 'toDos';

let todos = [];

function deleteTodo(event){
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);

    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);  
    });

    todos = cleanTodos;

    saveTodos();
}

function saveTodos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintTodo(text){
    const newId = todos.length + 1;

    const li = document.createElement('li');

    const btnDel = document.createElement('button');
    btnDel.innerHTML = '삭제';
    btnDel.addEventListener('click', deleteTodo);

    const span = document.createElement('span');
    span.innerText = `- ${text}`;

    li.appendChild(span);
    li.appendChild(btnDel);
    li.id = newId;
    todoList.appendChild(li);

    const todo = {
        text: text,
        id: newId
    };

    todos.push(todo);

    saveTodos();
}

function handleSubmit(event){
    event.preventDefault();

    const currentValue = todoInput.value;

    paintTodo(currentValue);

    todoInput.value = '';
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    
    if(loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        
        parsedTodos.forEach(function(todo){
            paintTodo(todo.text);
        });
    }
}

function init(){
    loadTodos();
    todoForm.addEventListener('submit', handleSubmit);
}

init();