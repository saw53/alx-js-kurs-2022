import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// W reactcie , jesli chcemy uzyc grafik to potrzebujemy je zaimportowac
import logo from './logo.svg';
import './App.css';

// jesli funkcja zwraca kawalek HTML to jet to komponent

// wewnatrz komponentow moge uzywac wszystkich funkcji dostepnych w react
// nazwy komponentow musza byc z wielkiej litery

function App() {

  const [istaskNameError, setIstaskNameError] = useState(false);
  const [todos, setTodos] = useState([]);

  // wszystkie funkcje, (eventy, dodatkowe funkcje , musz sie znalezc w srodku komponentu)
  // useEffect jest to funkcja ktora sluzy do konfigurowania stanu naszych komponentow przez
  // np. pobieranie danych z LS lub bazy danych

  useEffect(() => {
    const todosFromLS = localStorage.getItem('todos');

    if(todosFromLS) {
      setTodos(JSON.parse(todosFromLS))
    }

    console.log("Wita Panstwa useEffect");
  }, [])

// [] oznacza , ze ta foo odpali sie tylko raz , od razu po pierwszym zaladowaniu komponentu
// jesli w tej tablicy wpiszemy jakas zmienna to funkcja useEffect odpali siewtedy 
// kiedy zmienna ulegnie zmianie


  // 1. Eventy w React

  // JS - React
  // click - onClick
  // submit - onSubmit
  // ???    - onchange - uzywany w Reactcie do inputow. Dzieki temu React moze sledzic
  // wartosc inputa (wynika to z  tego ze w react nie lapiemy elemetow)

  const handleClick = () => {
    console.log("klikniety");
    // Jesli uzywamy funkcji zmiany satau to w srodku przekazujemy nowy stan
    // setInputValue('Piotr');
    setTodos([]);
    localStorage.setItem('todos',JSON.stringify([]));
  }

  const handleTodoRemove = (idToremove) => {
      const filteredTodos = todos.filter(todo => {
        return todo.id !== idToremove
      })

      setTodos(filteredTodos);
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
  }

  const handleSubmit = (event) => {
      event.preventDefault();


      if(inputValue.length < 3){
        setIstaskNameError(true);
      
        return;
      }
      console.log("wysylam formularz ;)");

      // jesli chce sie dostac do wartosci input w funkcji submit musze skorzystac ze stanu
      console.log(inputValue);
      // potrzebujemu ustawic 
      // setTodoTask(inputValue);

      //Czyszczenie inputa
      // potrzebujemy zmienic wartosc inputValue uzywajac funkcji setInputValue z wartoscia '' pustego stringu
      setInputValue('');

      const newMessage = {
        id: uuidv4(),
        message: inputValue
      }

      const newTodos = todos.concat(newMessage); //kwestia dobrych praktyk, 
                                                 //metoda concat nie modyfikuje tablicy wejsciowej

      setTodos(newTodos);
      localStorage.setItem('todos',JSON.stringify(newTodos));
      setIstaskNameError(false);
  }

  const handleInputChange = (event) => {
    //zeby dostac sie do tego co zostalo wpisane w tresci formularza
    // potrzebujemy skorzystac z event.target
    // -potrzebuje przekazac obecna wartosc inputa, do zmiennej trzymajacej stan inputa
    console.log("zmieniam na: " + event.target.value);
    setInputValue(event.target.value);
  }

  // 2. State (stan komponentu)
  // - Stan jest potrzebny do śledzenia zmiennych ktore zmieniaja sie w czasie np; 
    // * Lista zadan - poczatkowo pusta tablica a potem lista obiektow
    // Wartsc inputa - poczatkowa wartosc jest '', natomiast kazde klikniecie klawiatury, 
    // zmienia zawartosc inputa
  
  // Zeby skorzytac ze stanu potrzebujemy zaimportowac funkcje useState z Reacta  
  // inputValue jest to zmienna trzymajaca obecna funkcje
  
  // useState('') oznaczaja wartosc poczatkowa zmiannaje ze stanem

  //let inputvalue = ''
  // const setInputValue = (value) => {
  // inputValue = newValue;
  //}
  const [inputValue, setInputValue] = useState('');
  
  // przypadek wielekrotnych wartosc 
  // const [inputValue, setInputValue] = useState('');
  // const [inputMessageValue, setMessageValue] = useState('');

  // jezeli chcemy nie wyswietla poczatkowo elementu to dajemy wartosc null
  // poczatkowo musimy zdefiniowac sobie zmienna stanowa ktora bedzie trzymac trescia zadania,
  // ktore zostanie wypelnione po uzupelnieniu formularza 
  const [todoTask, setTodoTask] = useState(null);


  // const todos = [
  //   {
  //     id: '1',
  //     message: 'Wyniesc smieci'
  //   },
  //   {
  //     id: '2',
  //     message: 'Wyprac posciel'
  //   }
  // ]

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          
          <p>Hello React {inputValue}</p>

          <form onSubmit={handleSubmit}>
            <div>
            <label>
              Task Name  
              <input type="text" value ={inputValue} onChange={handleInputChange}></input>
            </label>
            {/* w Reactcie , walidacje sie robi tak, ze HTML wstawia sie od razu do
            komponentu, natomiast w stanie trzymamy informacje, czy powinismy
            wyswietlic error czy nie */}
              {
                istaskNameError
                  ?  <p className="error">Pole TaskName musi byc dłuższ niż 2 znaki</p>
                  : <p> </p>
              }
            </div>
            <button type="submit">Wyślij</button>
          </form>

          <button onClick={handleClick}>Remove Tdos!</button>
          <ul>
            {
              todos.map(todo => {
                // Atrybut key jest wymagany przy renderowaniu listy. Jest on
                // potrzenbny Reactowi zeby okreslic, ktory element jest wyswietlany/klikalny/zmieniany
                // Wazne: atrybut ID powinien byc unikalny
                return (
                <li key={todo.id}>{todo.message}
                {/* jesli uruchomimy w petli pusta funkcje strzalkowa i w parametrze
                    przekazemy np. id, to w momencie wywolania tego eventu, bedziemy mieli
                    id elementu jako parametr */}
                    <button onClick={() => handleTodoRemove(todo.id)}> X </button>
                </li>

                )
              })
            }
          </ul>

          {/* <button onClick={handleClick}>Remove Tdos!</button> */}
      </header>
    </div>
  );
}

export default App;
