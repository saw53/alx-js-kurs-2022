// Napisz aplikacje TodoList. Pod spodem lista wymagan

// 1. Stworz strone z lista todos i zaladuj elementy z API
// 2. Zrob nawigacje, dzieki ktorej bedziesz mogl przejsc do podstrony add
// 3. Na podstronie add, zrob obsluge dodawania elementow todo do API
// 4. Po poprawnym dodaniu do strony, przekieruj na podstrone glowna

// Zadania dodatkowe

// 5. Pod lista todo, dodaj przycisk 'remove todos', ktory spowoduje usuniecie wszystkich todos. 
// Rzeczy do wykonania

//  - Dodaj do pliku server.js obsluge endpointa /todos z metoda HTTP REMOVE
//  - Endpoint bedzie mial za zadanie, wyczyscic tablice todos z pliku todos.json
//  - Jesli operacja sie powiedzie, to wyczysc liste z HTML

// 6. Ostyluj listę

// 7*. Dodaj ikonke X przy kazdym elemencie TODO. Nastepnie za pomoca 
// document.addEventListener('click', handleRemoveTodo) i wlasciwosci event.target spraw, zeby usunac kazdy pojedynczy element. (pamietaj o przekazaniu ID na BE).

const todoList = document.querySelector('#todoList');
const removeTodos = document.querySelector('#removeTodos');

const renderTodoList = ((data) => {
    todoList.innerHTML = '';
    console.log(data);
    data.forEach((entry) =>{
        todoList.innerHTML += `
        <li> Title: ${entry.title} Author: ${entry.author}
            <button class='edit' data-elementId="${entry.id}"> &#9998 </button>
            <button class='close' data-elementId="${entry.id}"> X </button>
        </li>
        `
        })
})

/* <button class='close'> X </button>
            <button class='edit'> &#9998 </button> */

const fetchTodosFE = (  () => {
    fetch('http://localhost:5000/todos')
    .then((response) => {
        // console.log(response.json());
        return response.json();
    })
    .then((data) => {
        renderTodoList(data.todos);
    })
});

const handleRemoveTodos = () => {
       console.log('Yoyo');
        fetch('http://localhost:5000/todos', {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({"todos":[]})
        })
        .then(() => {
           console.log('Yo');     
        })
}

const handleDeleteToDo = (event) => {
    const idToDelete = event.target.getAttribute('data-elementId');
    console.log("handleDeleteToDo entry with idToDelete: " + idToDelete);
    fetch(`http://localhost:5000/todos/${idToDelete}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('handleDeleteToDo invoked');
    })
}

  

const handleClickOnListBtns = (event) => {
    console.log(event.target);
    if(event.target.classList.contains('edit'))
    {
        handleEditToDo(event);
        // console.log('Clicked "edit" class element');
    }
    if(event.target.classList.contains('close'))
    {
        event.target.parentElement.remove();
        handleDeleteToDo(event);
        // console.log('Clicked "close" class element');
    }

}

fetchTodosFE();
removeTodos.addEventListener('click', handleRemoveTodos);
todoList.addEventListener('click', handleClickOnListBtns);