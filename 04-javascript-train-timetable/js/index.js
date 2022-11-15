console.log('Hello lista pociagow');

// Stworz projekt o nazwie wyszukiwarka polaczen PKP

// Zadaniem aplikacji jest stworzenie dwoch stron

// Pierwsza strona powinna wyswietlac liste polaczen PKP
// Druga strona powinna zawierac formularz, pozwalajacy dodac nowe polaczenie PKP

// Wymagania:

// 1. Projekt musi byc postawiony za pomoca parcela
// 2. Projekt musi byc projektem npm i zawierac odpowiednie paczki
// 3. Projekt musi zawierac plik gitignore z odpowiednia trescia
// 4. Do pobierania i wysylania danych skorzystaj z json-server

// Wymagania dodatkowe z gwiazdka:

// 5. Na stronie glownej, dodaj wyszukiwarke, ktora bedzie filtrowala polaczenia pociagow
// 6. Stworz dodatkowa strone edit.html i spraw ze mozna edytowac polaczenie pociagu (PUT)

const trainList = document.querySelector('#trainList');
const searchTrainForm = document.querySelector('#searchTrainForm');
const searchTrainInput = document.querySelector('#searchTrainInput');

let trains = [];

const handleSearch = (event) => {
    event.preventDefault();

    const filteredTrains = trains.filter(train => {
        return train.from.toLowerCase().includes(searchTrainInput.value.toLowerCase())
        || train.to.toLowerCase().includes(searchTrainInput.value.toLowerCase())
    })

    return renderTrainList(filteredTrains);

}

const renderTrainList = ((trains) => {
    trainList.innerHTML = '';
    trains.forEach((entry) =>{
        trainList.innerHTML += `
        <li> From: ${entry.from} To: ${entry.to} Date: ${entry.date} </li>
        `
        })
})

const fetchTrains = (  () => {
    fetch('http://localhost:5000/trains')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //zmienna globalna do celow filtracji
        trains = data;
        renderTrainList(data);
        // console.log(data);
        
    })
});

fetchTrains();
searchTrainForm.addEventListener('submit', handleSearch);
    