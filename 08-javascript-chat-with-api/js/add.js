// const data = JSON.parse(localStorage.getItem('messages')) ?? []            

import { v4 as uuidv4} from 'uuid';


const addMsg = document.querySelector('#addMsg');
const authorInput = document.querySelector('#authorInput');
const msgInput = document.querySelector('#msgInput');
const addBtn = document.querySelector('#addBtn');


const postAddNewMsg = (todo) => {
    fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(() => {
      window.location.href = 'index.html';
        // console.log("brak przekierowania");
    })
  }


const handleAddBtn = (event) => {
    event.preventDefault();
    // console.log('add btn submitted');
    // tmpStorage = JSON.parse(localStorage.getItem('messages')) ?? [];
    tmpMsg = {
        id: uuidv4(), 
        author: authorInput.value,
        message: msgInput.value
    }
    // tmpStorage.push(tmpMsg);
    // console.log('dodaje msg:');
    // console.log(JSON.stringify(tmpStorage));
    // localStorage.setItem('messages', JSON.stringify(tmpStorage));
    // console.log('dodane');
    postAddNewMsg(tmpMsg);
}


addMsg.addEventListener('submit', handleAddBtn);