const ENDPOINT = 'https://ghibliapi.vercel.app/films';

const dataFilms = () => fetch(ENDPOINT)
    .then(response => response.json())
    .then(responseData => responseData)
    .catch(e => alert(`Se ha detectado un error: ${e}`))

export { dataFilms };
