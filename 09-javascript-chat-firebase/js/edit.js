import { ref, onValue, set, remove, get } from "firebase/database";
import { database } from "./utils/my_firebase";

const editMessageForm = document.querySelector('#editMessageForm');
const authorInputEdit = document.querySelector('#authorInputEdit');
const editBtn = document.querySelector('#editBtn');
const messageInputEdit = document.querySelector('#messageInputEdit');
const cancelBtn = document.querySelector('#cancelBtn');
const appLabel = document.querySelector('#appLabel');


const messagesRef = ref(database, '/messages');

const editMessage = (idtoEdit) => {
    console.log('edit method reached with idToEdit: ' + idtoEdit);
  
    const editedData = {
        author: authorInputEdit.value,
        message: messageInputEdit.value
    }

    set(ref(database, 'messages/' + idtoEdit), editedData);
}

const handleCancelBtn = (event) => {
    event.preventDefault();
    localStorage.setItem('idToEdit', '');
    window.location.href = 'index.html';
}

const renderFields = () => {

    const idId = localStorage.getItem('idToEdit');
    console.log("got id to edit: " + idId);

    onValue(messagesRef, (data) => {
        const messages = data.toJSON();

        Object.keys(messages).map(key => {
            if(key === idId){
                appLabel.innerText += `  id: [ ${idId} ]`;
                authorInputEdit.value = messages[key].author;
                messageInputEdit.value = messages[key].message;
            }
                
        })
    })
}


// var dataRef = firebase.database().ref('users');
// dataRef.on('value', (snapshot) => {
//     const data = snapshot.val();
//     users = data;
// });


const handleEdit = (event) => {
    event.preventDefault();
    editMessage(localStorage.getItem('idToEdit'));
    appLabel.innerText = "Chat App Edit";
    window.location.href = 'index.html';
}


renderFields();
cancelBtn.addEventListener('click', handleCancelBtn);
editMessageForm.addEventListener('submit', handleEdit);

