import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { addNewMsg, fetchMsgs } from './controllers/messages.js';

// Wlasny server (BE)
const app = express();

// Uzycie biblioteki bodyParser, zeby przeksztalcana nam format JSON na obiekty JS podczas zapytan POST i PUT
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use(cors());
app.use(cors({
  origin: '*'
}));

// API - Application Programming Interface
// Zbior endpointow

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/', (req, res) => {
  res.status(200).send('Hello world')
})

// ENDPOINT - Pojedynczy punkt wejsciowy do aplikacji
app.get('/messages', (req, res) => {
  fetchMsgs()
    .then(data => {
      // console.log(data);
      res.status(200).send(data)
    })
})

app.post('/messages', (req, res) => {
//   req.body to jest zawartosc body, ktory przyjdzie z zapytania POST
  // console.log('post endpoint reached');  
//   console.log(req.body);

  // TUTAJ JEST MIEJSCE NA WALIDACJE
  if(!req.body.id) {
    return res.status(400).send('Lack of id in the sent request')
  }

  addNewMsg(req.body)
    .then(() => {
      res.status(200).send('OK!')
    })
})

// app.delete('/todos', (req, res) => {
//   deleteTodos()
//     .then((data) => {
//       console.log("delete reached");
//       res.status(200).send('OK!');
//     })
// })


app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})
