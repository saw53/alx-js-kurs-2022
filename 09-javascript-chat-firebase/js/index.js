import { ref, onValue, set, remove, get } from "firebase/database";
import { database } from "./utils/my_firebase";

const messagesList = document.querySelector('#messagesList');
const addMessageForm = document.querySelector('#addMessageForm');
const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');
const sendBtn = document.querySelector('#sendBtn');

// To sluzy do tego, aby powiedziec firebase, z ktorego miejsca w bazie danych chcemy pobrac dane.
console.log(database);
const messagesRef = ref(database, '/messages');
console.log("msgRef: " + messagesRef);

const renderMessages = messages => {
  messagesList.innerHTML = '';

  messages.forEach(messageFromFB => {
    messagesList.innerHTML += `
      <li> id ${messageFromFB.id} ${messageFromFB.message} - <strong>${messageFromFB.author}</strong>
      <button class='edit' data-elementId="${messageFromFB.id}"> &#9998 </button>
      <button class='close' data-elementId="${messageFromFB.id}"> X </button>
      </li>
    `
    console.log(messageFromFB);
  })
}

//zaminiamy potrzebne do edycji funkcje
const fetchMessages = () => {
  // Potrzebujemy wlaczyc nasluchiwanie na zmiany w firebase
  onValue(messagesRef, (data) => {
    const messages = data.toJSON();

    // Zeby miec ID w obiekcie, ktory przychodzi z firebase, potrzebujemy dodac id (ktory jest kluczem obiektu), do kazdego obiektu pod pozycja id

    const messagesWithId = Object.keys(messages).map(key => {
      messages[key].id = key;// do każdego obiektu dokleja klucz id
      return messages[key];
    })

    renderMessages(messagesWithId)

    // Potrzebujemy obiekt obiektow, zamienic na tablice obiektow
    // Object.values przerabia wartosci obiektu na tablice obiektow (pomija klucze)
    // renderMessages(Object.values(messages))
  })
}

// const fetchMessages = () => {
//   // Potrzebujemy wlaczyc nasluchiwanie na zmiany w firebase
//   onValue(messagesRef, (data) => {
//     const messages = data.toJSON();

//     // Potrzebujemy obiekt obiektow, zamienic na tablice obiektow
//     // Object.values przerabia wartosci obiektu na tablice obiektow (pomija klucze)
//     renderMessages(Object.values(messages))
//   })
// }

const saveMessage = messageToSave => {
  // generuje ID za pomoca timestampow, czyli czasu ktory uplynal od 01.01.1970, co gwarantuje mi tylko i wylacznie wieksze cyfry
  const randomId = Date.now()
  set(ref(database, 'messages/' + randomId), messageToSave)
}

const deleteMessage = (idToEditOrDelete) => {

  console.log('deleteMessage reached with id: ' + idToEditOrDelete);
  remove(ref(database, 'messages/' + idToEditOrDelete));

}


const handleAddMessage = (event) => {
  event.preventDefault();
  console.log("btn value: " + sendBtn.textContent);

  // firebase sam generuje ID, wiec nie potrzebujemy tutaj uuid
  const newMessage = {
    author: authorInput.value,
    message: messageInput.value
  }

  saveMessage(newMessage);
  
}

const handleEditOrDelete = (event) => {
  
  const idToEditOrDelete = event.target.getAttribute('data-elementId');

  if(event.target.classList.contains('close'))
  {
    deleteMessage(idToEditOrDelete);
    event.target.parentElement.remove();
    console.log('close reached with id: ' + idToEditOrDelete);
  }
  if(event.target.classList.contains('edit'))
  {
    localStorage.setItem('idToEdit',idToEditOrDelete);
    window.location.href = 'edit.html';
    console.log('edit reached with id: ' + idToEditOrDelete);
  }
}

fetchMessages();
addMessageForm.addEventListener('submit', handleAddMessage);
messagesList.addEventListener('click', handleEditOrDelete);


  // 1. Zrob obsluge edycji i usuwania w FB
  // - do edycji skorzystaj z metody set

  // set(ref(database, 'messages/' + elementId), editedData)


  // - do usuwania uzyj metody remove(ref(database, 'messages/' + elementId)). 
  // Pamietaj zeby zaimportowac remove