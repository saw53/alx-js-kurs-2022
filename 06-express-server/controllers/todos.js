// import fs from 'fs';
// const fsp = fs.promises;
// // model budowania aplikacji MVC 
// // Model View Controller

// // Model - jeden pojedynczy TODO
// // do torzenia modeli w js uzywa sie systemow ORM np mongoose


// //View - express

// // Controller - plik, zawierajacy funkcje dotyczace danego zasobu

// export const fetchTodos = () => {
//     //na poczatku nie mamy slasha poniewaz uzywamy sciezki absolutnej czyli glownego folderu serwera
//     // fsp.readFile('data/todos.json','utf8')
//     // .then((data) => {
//     //     console.log(data);
//     // })
    
//     return fsp.readFile('data/todos.json', 'utf8');
// }

// // todo to caly obiekt, ktory idzie z FE
// export const addTodo = (todo) => {
//     fsp.readFile('data/todos.json','utf8')
//     .then(data => {
//         const parsedJSON = JSON.parse(data);
//         parsedJSON.messages.push(todo);
//         return fsp.writeFile('data/todos.json', JSON.stringify(parsedJSON), 'utf8')
//     })
// }

import fs from 'fs';
const fsp = fs.promises;
// Model budowania aplikacji MVC

// Model, View, Controller

// Model - jeden pojedynczy TODO
//    do tworzenia modeli w JS, uzywa sie tzw systemow ORM np. mongoose

// View - express
// Controller - plik, w ktorym mamy funkcje dotyczace danego zasobu

export const fetchTodos = () => {
  // na poczatku nie mamy slasha, poniewaz uzywamy tzw sciezki absolutnej (czyli od glownego folderu serwera)
  return fsp.readFile('data/todos.json', 'utf8')
}

// todo jest to caly obiekt, ktory idzie z FE
export const addTodo = (todo) => {
  return fsp.readFile('data/todos.json', 'utf8')
    .then(data => {
      const parsedJSON = JSON.parse(data);
      // Potrzebuje do odczytanego JSON dodac nowy obiekt a nastepnie go zapisac
      parsedJSON.todos.push(todo);

      return fsp.writeFile('data/todos.json', JSON.stringify(parsedJSON), 'utf8');
    })
}