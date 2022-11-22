import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));

// JSX podstawy
// 1. Wstawianie zmiennych jako węzłów HTML

// const element = <h1>Hello react</h1>;   moga byc w jednej linii bez nawiasu lub wiele elementow z nawiasami

const element = (
  <h1>Hello react</h1>
)

// 2. Wstawianie funkcji

const calculate = (a, b) => a + b;

// 3. Wstawianie atrybutów

// class = className

// ważna rzecz: węzły HTML zapisane do zmiennych lub zwracane, 
// zawsze musza miec tylko i wyłącznie jeden znacznik otwierajacy/zamykajacy
// 

const element2 = (
  // Mysi byc wrapper. Moze byc dowolny tag htnl lib tzw znacnzik pusty <></> tzw React Fragment
  // to dziala w JSX
  <>
    <h1 className="title">Element 2</h1>
    <h1 className="title">Element 3</h1>
  </>
  )


/* korzeń dokument w REACT*/
root.render(
  <React.StrictMode>
    {/* Klamry służą do wstawiania elementów
    <h1>Hello react</h1>  <App />
    */}
    {/* {element} {calculate(2, 2)} {element2} */}
    {/* <App /> */}
    <Chat />
  </React.StrictMode>
);

