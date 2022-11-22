import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {
  getMovie,
  getMovies
} from './controllers/movies.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "*"
}))

app.get('/', (req, res) => {
    res.status(200).send('Siema Eniuu !!!');
})

// // querystring jest obslugiwany przez endpoint glowny, bez parametrow
app.get('/movies', (req, res) => {
  getMovies()
    .then(data => {
      res.status(200).send(data);
    });
})

app.get('/movies/:id', (req, res) => {
  getMovie(req.params.id)
    .then(data => {
      res.status(200).send(data)
    })
})

app.post('/movies', (req, res) => {
  if(!req.body.id) {
    return res.status(400).send('Lack of ID!');
  }

  saveMovie(req.body)
    .then(() => {
      res.status(200).send('OK!');
    })
})

// // /:id w ten sposob mowimy ze oczekujemy id w parametrze.
// // to bedzie dostepne w req.params

// app.delete('/messages/:id', (req, res) => {
//   // console.log(req.params.id); // Odczytanie ID z FE

//   deleteMessage(req.params.id)
//     .then(() => {
//       res.status(200).send('OK!');
//     })
// })

// app.put('/messages/:id', (req, res) => {
//   // potrzebujemy przekazac ktory element edytujemy oraz jaka jest nowa zawartosc
//   editMessage(req.params.id, req.body)
//     .then(() => {
//       res.status(200).send('OK!');
//     })

// })

app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})