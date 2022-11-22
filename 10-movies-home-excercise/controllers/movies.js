import fs from 'fs';
const fsp = fs.promises;

const DATA_PATH = 'data/movies.json';

export const getMovies = () => {
    return fsp.readFile(DATA_PATH, 'utf-8');
}

export const getMovie = (id) => {
    return getMovies()
    .then((data) => {
        const parsedJSON = JSON.parse(data);
        const foundMovie = parsedJSON.movies.find(s => movie.id === id);

        return foundMovie;
    })    
}

export const saveMovie = (newMovie) => {
    return getMovies()
    .then((data) => {
        const parsedJSON = JSON.parse(data);
        parsedJSON.push(newMovie);

        return fsp.writeFile(DATA_PATH, JSON.stringify(parsedJSON), 'utf-8');
    })
}