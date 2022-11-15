const editDiv = document.querySelector('#editDiv');
const labelMsgcontent = document.querySelector('#labelMsgcontent');
const editForm = document.querySelector('#editForm');
const editAuthorInput = document.querySelector('#editAuthorInput');
const editMsgInput = document.querySelector('#editMsgInput');
const editBtn = document.querySelector('#editBtn');


localData = []

const foo = (event) => {
    // tmpMsgContent = renderEdit(localStorage.getItem('msgContent'))
    // event.preventDefault();
    console.log("got edit");
    console.log(localData);
}

export const renderEdit = (data) => {
    console.log("renderEdit invoked with data: " + data.target.id);
    // tmpStorage = JSON.parse(localStorage.getItem('msgContent')) ?? [];
    // newObj = {
    //     id: data.target.id,
    //     author: editAuthorInput.value,
    
    //     message: editMsgInput.value
    // }
    // tmpStorage.push(newObj);
    // localStorage.setItem('msgContent', JSON.stringify(tmpStorage));
    // localData.push(data);
}

foo();
addEventListener('DOMContentLoaded', foo);