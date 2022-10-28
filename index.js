const addTodoInput = document.querySelector('#addTodoInput');
const addTodoButton = document.querySelector('#addTodoButton');
const removeTodoButton = document.querySelector("#removeTodoButton");
const addTodoList = document.querySelector("#addTodoList");
const addTodoForm = document.querySelector("#addTodoForm");


let todos = JSON.parse(localStorage.getItem('todos'));
if(todos === null){
    todos = [];
}

function handleAddTodoButton(event){
    // console.log("Przycisk wciśnięty");
    event.preventDefault();
    textValue = addTodoInput.value;

    addTodoList.innerHTML += `
        <li> ${textValue} </li>
    `
    todos.push({title: textValue});
    localStorage.setItem('todos', JSON.stringify(todos));
    // console.log(textValue);
    addTodoInput.value = '';
}

function handleRemoveTodoButton() {
    // console.log("Wciśnięty remove btn");
    addTodoList.innerHTML = '';
    localStorage.removeItem('todos');
}

function renderTodos() {
    todos.forEach(todo => {
        addTodoList.innerHTML += `
            <li>${todo.title}</li>
        `
    })
}

addTodoButton.addEventListener('click',handleAddTodoButton);
removeTodoButton.addEventListener('click',handleRemoveTodoButton);
renderTodos();
