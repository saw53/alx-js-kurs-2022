const msgList = document.querySelector('#msgList');
const listDiv = document.querySelector('#listDiv');

import { renderEdit } from './edit.js'

// const data = JSON.parse(localStorage.getItem('messages')) ?? []

const fetchFromBE = () => {
    fetch('http://localhost:5000/messages')
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        renderMsgList(response.messages);
    })
}

const renderMsgList = (tmpData) => {

    tmpData.forEach((obj) => {
            msgList.innerHTML += `
        <li id="${obj.id}"> Autor: ${obj.author} Msg: ${obj.message}
        <button class='edit'> &#9998 </button>
        <button class='close'> X </button>
        </li>
        ` 
    // <i class="fas fa-pen" style="font-size:10px;"></i>
            

    })
}

const removeElementbyId = (elem_id) => {
    fetch(`http://localhost:5000/messages/${elem_id}`)
    .then((got_elem) => {

    })

} 

const redirectToEdit = (event) => {
    console.log(event);

    if(event.target.classList.contains('close')){    
        event.target.parentElement.remove();
        //tutaj funkcja ktora po id usunie daen z bazy
    }else if(event.target.classList.contains('edit')){
        console.log('edit class obj clicked');
        window.location.href = 'edit.html';
        console.log("redirecting to edit.html");
    }

    // removeElementbyId(event.target.id);
    
}
// renderMsgList(data);
// fetchFromBE();

addEventListener('DOMContentLoaded', fetchFromBE);
msgList.addEventListener('click', redirectToEdit);

