import { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Chat.css'
// Napisz aplikacje Chat, skladajaca sie z formularza i listy
// formularz ma 2 pola input na author i message
//nastepnie po wcisnieciu przycisku   Wyslij,
// wyswietl wiadomosci w liscie


// 2. napisz walidacje do czatu ze pole author nie moze byc puste 
// i message nie moze byc krotsze niz 3znaki

// 3. Wstaw usowanie pojedynczych wiadomosci 


const Chat = () => {

    const [isFormError, setFormError] = useState(false);
    const [msgBox, setMsgBox] = useState([]);
    const [authorInput, setAuthorInput] = useState('');
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        const messagesFromLS = localStorage.getItem('messages');
    
        if(messagesFromLS) {
            setMsgBox(JSON.parse(messagesFromLS));
        }
    
        console.log("Wita Panstwa useEffect");
      }, [])

    const handleSend = (event) => {
        event.preventDefault();

        if(authorInput === "" || messageInput.length <2)
        {
            setFormError(true);

            return
        }

        const newMessage = {
            id: uuidv4(),
            author: authorInput,
            message: messageInput
        }

        const newMsgBox = msgBox.concat(newMessage);
        setMsgBox(newMsgBox);
        localStorage.setItem('messages', JSON.stringify(newMsgBox));
        setFormError(false);        

        console.log('handle send clicked with ' + msgBox);
        
        setAuthorInput('');
        setMessageInput('');
    }

    const handleChangeAuthor = (event) => {
        setAuthorInput(event.target.value);
        console.log('author change');
    }

    const handleChangeMessage = (event) => {
        setMessageInput(event.target.value);
        console.log('message change');
    }

    const handleMsgRemove = (msgIdToRemove) => {
            const filteredMsgs = msgBox.filter(msg => {
              return msg.id !== msgIdToRemove;
            })
      
            setMsgBox(filteredMsgs);
            localStorage.setItem('messages', JSON.stringify(filteredMsgs));

            // setTodos(filteredTodos);
            // localStorage.setItem('todos', JSON.stringify(filteredTodos));
    }

    return (
        <div>
            <h1>Hello Chat</h1>
            <form onSubmit={handleSend}>
                <label>Author: </label>
                <input type="text" value={authorInput} onChange={handleChangeAuthor}></input>
                <label>Message: </label>
                <input type="text" value={messageInput} onChange={handleChangeMessage}></input>
                <button type="submit">Wyślij</button>
            </form>
            {
                isFormError ?
                <p class="chatError"> Pole author nie może być puste a pole message nie może zawierać wiadomości krótszej niż 2 znaki</p>
                : null    
            }
            <ul>
                {
                    msgBox.map(msg => {
                        return (
                        <li key={msg.id}>{msg.author} : {msg.message}
                            <button onClick={() => handleMsgRemove(msg.id)}> X </button>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Chat;
