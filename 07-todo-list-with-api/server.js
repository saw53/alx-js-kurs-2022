// import express from 'express';
// import bodyParser from 'body-parser';
// import { addTodo, fetchTodos } from './controllers/todos.js';


// const app = express();


// //uzycie body-parser zamienia to co przyjdzie z body w zapytaniu POST na obiekty js 
// //zamiast JSON ktore przychodza natywnie
// app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//     res.status(200).send('Hello  World');
// })

// app.get('/todos', (req, res) => {
//     fetchTodos()
//     .then(data => {
//     res.status(200).send(data);
//     })
// })

// app.post('/todos', (req, res) => {
    
//     //walidacja danych wejsciowych musi byc pole id
//     if(!req.body.id) {
//         res.status(400).send('Lack of id in incoming data');
//     }

//     addTodo(req.body)
//     .then(() => {
//         res.sendStatus(200).send('OK');
//     })
// })



// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { addTodo, fetchTodos, deleteTodos, deleteToDo } from './controllers/todos.js';

// Wlasny server (BE)
const app = express();

// Uzycie biblioteki bodyParser, zeby przeksztalcana nam format JSON na obiekty JS podczas zapytan POST i PUT
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// API - Application Programming Interface
// Zbior endpointow

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/todos', (req, res) => {
  fetchTodos()
    .then(data => {
      console.log(data);
      res.status(200).send(data)
    })
})

app.post('/todos', (req, res) => {
  // req.body to jest zawartosc body, ktory przyjdzie z zapytania POST
  console.log('post todos invoked');
  console.log(req.body);

  // TUTAJ JEST MIEJSCE NA WALIDACJE
  if(!req.body.id) {
    return res.status(400).send('Lack of id in the sent request')
  }

  addTodo(req.body)
    .then(() => {
      res.status(200).send('OK!')
    })
})

app.delete('/todos', (req, res) => {
  deleteTodos()
    .then((data) => {
      console.log("delete reached");
      res.status(200).send('OK!');
    })
})

app.delete('/todos/:id', (req, res) => {
  console.log('backend got data with delete/:id method');
  console.log(req.params.id);
  deleteToDo(req.params.id)
  .then(() => {
    console.log("delete ToDo reached");
    res.status(200).send('OK!');
  })
  .catch((err) => {
    console.log("delete ToDo err: " + err);
  })
})


app.delete('/messages/:id', (req, res) => {
  // console.log(req.params.id); // Odczytanie ID z FE

  deleteMessage(req.params.id)
    .then(() => {
      res.status(200).send('OK!');
    })
})



app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})
