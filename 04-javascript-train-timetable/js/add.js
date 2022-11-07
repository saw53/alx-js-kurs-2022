import { v4 as uuidv4 } from 'uuid';

console.log('Hello dodaj pociag');


// Zeby za pomoca JS przejsc do strony index.html po wcisnieciu guzika "Dodaj", potrzebujemy uzyc metody
// window.location.href = 'index.html';

/* <form id="addForm">
      <input id="addFrom"></input>
      <input id="addTo"></input>
      <input id="addDate"></input>
      <button id="addBtn" type="submit">Dodaj</button> */

const addForm = document.querySelector('#addForm');
const addFromInput = document.querySelector('#addFromInput');
const addToInput = document.querySelector('#addToInput');
const addDateInput = document.querySelector('#addDateInput');
const addBtn = document.querySelector('#addBtn');


//Uwaga Pole ID jest wymagane przy POST i PUT

// fetch('http://localhost:5000/messages', {
//     method: 'POST',
//     headers: {
//         'Content-type' : "application/json"
//     },
//     body: JSON.stringify(messageToSend)
// })
const resolveSubmit = (event) => {

    event.preventDefault();
    
    let messageToSend = {
        id: uuidv4(),
        from: addFromInput.value,
        to: addToInput.value,
        date: addDateInput.value,
        isPremium: false,
    }
    // console.log(messageToSend);

    fetch('http://localhost:5000/trains', {
     method: 'POST',
     headers: {
                'Content-type' : "application/json"
    },
        body: JSON.stringify(messageToSend)
    })

    window.location.href = 'index.html';
    return false;
}

addForm.addEventListener("submit", resolveSubmit);