const ENDPOINT = 'https://ghibliapi.herokuapp.com/films';

const dataFilms = () => fetch(ENDPOINT)
    .then(response => response.json())
    .then(responseData => responseData);

export { dataFilms };