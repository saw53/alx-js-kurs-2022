// W node.js mamy 2 sposoby importowania modulow

//1. import
//2. require

// require dziala jak import bez klamer
const fs = require('fs');
const fsp = fs.promises;

// //Operacja odczytu pliku
// fsp.readFile('./kurs.txt', 'utf8')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     })


// const newContent = 'kolejny kontent ;) \n';
    
// //Operacja zapisu do pliku

// fsp.writeFile('./kurs.txt', newContent, 'utf8')
//     .then(() => {
//         console.log("Udało się!");
//     })

// //Operacja dodawania zawartosci do pliku

// fsp.appendFile('./kurs.txt', newContent, 'utf8')
//     .then(() => {
//         console.log("Udało się!");
//     })

//-------------------------------------------------------
//ukladanie promisow

// Jak ulozyc promisy jeden po drugim
// Potrzebujemy zrobic funkcje, ktora zwraca promise

// const saveToFile = () => {
//     const newContentToKurs2 = 'Podmiana tekstu';
  
//     // Musimy pamietac, zeby zwrocic ten promise
//     return fsp.writeFile('./kurs2.txt', newContentToKurs2, 'utf8')
//       .then(() => console.log('Udalo sie!'));
//   }
  
//   const readFromFile = () => {
//     // Musimy pamietac, zeby zwrocic ten promise
//     return fsp.readFile('./kurs2.txt', 'utf8')
//       .then(data => console.log(data))
//       .catch(error => console.log(error));
//   }


//   readFromFile()
//     .then(() => {
//         saveToFile();
//     })


 // Rzeczy dodatkowe/zaawansowane

// 1. Jesli funkcja callback nie ma parametru i funckja ktora sie wykonuje od razu po niej tez nie ma parametru, to moge usunac () w obu miejscach
// readFromFile()
//   .then(saveToFile)

// 2. Zastosowanie tzw sugar syntax na then/catch

// const readFromFile2 = () => {
//   // Musimy pamietac, zeby zwrocic ten promise
//   return fsp.readFile('./kurs2.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// // ES7 async/await
// const readFromFileUsingAsyncAwait = async () => {
//   try {
//     const data = await fsp.readFile('./kurs2.txt', 'utf8')
//     console.log(data);
//     return data;
//   } catch(error) {
//     console.log(error)
//   }
// }

// 1. Stworz plik o nazwie data.json i wypelnij go danymi z zadaniami z chatu 
// (ten plik z json-server). 
// Nastepnie za pomoca node, odczytaj zawartosc pliku json i go sparsuj. 
// Nastepnie za pomoca metody forEach, wyswietl pojedynczy obiekt w konsoli


const dataFromFile = () => {
    return fsp.readFile('./data.json', 'utf8')
     .then((data) => {
        return (JSON.parse(data));
     })
     .then((content) => {
        content.messages.forEach((message) => {
            console.log(message);
        })
     })
     .catch((error) => {
        console.log(error);
     })
}

const writeToFile = (path) => {
    tmpFile = fsp.read
}


// dataFromFile();

// 2*. Stworz logike zeby zapisac nowa wiadomosc do pliku JSON


const newMessage = {
    author: 'Marcin',
    message: 'Kurs jest fajny'
}

const readFromJSON = () => {
    return fsp.readFile('./data.json','utf8')
}

const writetoJSON = (newEntry, path) => {
return readFromJSON()
    .then(data => {
        const parsedJSON = JSON.parse(data);
        // console.log(parsedJSON);
        parsedJSON.messages.push(newEntry);
        fsp.writeFile(path, JSON.stringify(parsedJSON), 'utf8')
    })
    .catch((error) => {
        console.log(error);
    })
}





   