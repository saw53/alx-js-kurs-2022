import fs from 'fs';
const fsp = fs.promises;



export const addNewMsg = (todoMsg) => {
return fsp.readFile('data/messages.json', 'utf8')
    .then(data => {
      console.log('addNewMsg foo reached by endpoint');  
      const parsedJSON = JSON.parse(data);
      console.log(parsedJSON);
      // Potrzebuje do odczytanego JSON dodac nowy obiekt a nastepnie go zapisac
      parsedJSON.messages.push(todoMsg);;

      return fsp.writeFile('data/messages.json', JSON.stringify(parsedJSON), 'utf8');
    })
    .catch (error => {
      console.log(error);
    })
}


export const fetchMsgs = () => {
    console.log('fetchMsgs reached by endpoint');
    return fsp.readFile('data/messages.json', 'utf8');
}