const chatNameInput = document.querySelector("#chatName");
const chatMsgInput = document.querySelector("#chatMsgInput");
const chatSndBtn = document.querySelector("#chatSndBtn");
const chatTextArea = document.querySelector("#chatTextArea");




document.addEventListener("DOMContentLoaded", ()=> {
    console.log("content loaded");
});

chatSndBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + "--"  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    // event.stopPropagation();
    console.log("btn clicked");
    // if(chatMsgInput.value != null){
        let inputName = "Anonymous";
        // console.log("chat name input: " + chatNameInput.value);
        if(chatNameInput.value != ""){
             inputName = chatNameInput.value;        
        }
        chatTextArea.value += `${inputName}: ${chatMsgInput.value} \n`;
        chatMsgInput.value = '';
    // }
    // else{
    //     console.log("empty msg");
    // }


    
    return true;
});
