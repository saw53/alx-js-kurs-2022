import {v4 as uuidv4} from 'uuid';

const mainSection = document.querySelector('#mainSection');
const addMovie = document.querySelector('#addMovie');

// let movies = JSON.parse(localStorage.getItem('movies'));

// if(movies === null) {
//   movies = [];
// }


// newMovie = {
//     "id": uuidv4(),
//     "title": "Avatar",
//     "category": "fantasy",
//     "description": "Lorem ipsum dolot sit amet.",
//     "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKttPEnfiRIL_WkPrFFrfwHKdsnQXVGS1GYQ&usqp=CAU",
//     "year": 2000,
//     "rate": 7.8
//   }


//spiderman poster  
//src="https://i.etsystatic.com/13367669/r/il/8adffe/1506815473/il_570xN.1506815473_lb94.jpg"

const renderView = (data) => {
  console.log(data);
  // data.forEach((movie) => {
      //   mainSection.innerHTML += 
      //   `
      //   <div class="container">
      //               <label id="nameLabel" class="movieLabel">${movie.title}</label>
      //               <image class="image-thubnail" 
      //               src=${movie.poster} 
      //               alt="no picture"></image>
      //               <lablel id="rateLabel" class="rateLabel">${movie.rate}</lable>
      //   </div>
      //   `;
    // })

    // localStorage.setItem('movies', JSON.stringify(movies));
}


const fetchMovies = () => {
  fetch('http://localhost:5000/movies')
  .then(response => response.json())
  .then(res => {
    console.log(res.movies);
    // renderView(res.movies)
  })
}

const redirectToAddMovie = () => {
    window.location.href = 'edit.html';
}


fetchMovies();
// document.addEventListener('DOMContentLoaded', renderView);
addMovie.addEventListener('click', redirectToAddMovie);