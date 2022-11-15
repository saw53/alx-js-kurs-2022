import { v4 as uuidv4} from 'uuid'

const addForm = document.querySelector('#addForm');
const addTitleInput = document.querySelector('#addTitleInput');
const addAuthorInput = document.querySelector('#addAuthorInput');
const addBtn = document.querySelector('#addBtn');



const postTodo = (todo) => {
    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(() => {
      window.location.href = 'index.html';
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newTodo = {
      id: uuidv4(),
      author: addAuthorInput.value,
      title: addTitleInput.value
    }
  
    postTodo(newTodo)
  }
  
  addForm.addEventListener('submit', handleSubmit)