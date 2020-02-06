import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dataFilms } from '../services/api';
import Header from './Header';
import Filters from './Filters';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import movies from '../data/movies.json';
import '../stylesheets/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchFilm: '',
      isSorted: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
    this.renderFilmsDetail = this.renderFilmsDetail.bind(this);
    this.handleSorted = this.handleSorted.bind(this);
  }

  //API call

  componentDidMount() {
    dataFilms().then(films => {
      for (let i = 0; i < films.length; i++) {
        for (let j = 0; j < movies.length; j++) {
          if (films[i].title === movies[j].name) {
            films[i].urlCover = movies[j].url
          }
        }
      }
      return this.setState({ films });
    });
  }

  //Search events

  handleSearch(searchFilm) {
    this.setState({ searchFilm });
  }

  //Sorted List
  handleSorted() {
    (this.state.isSorted === false)
      ? this.setState({ isSorted: true })
      : this.setState({ isSorted: false });
  }

  //Filter of films
  filterBySearch() {
    return (
      this.state.films.filter(film => {
        return film.title.trim().toLowerCase().includes(this.state.searchFilm);
      })
    );
  }

  //Render of FilmCard with details

  renderFilmsDetail(props) {
    const routeId = props.match.params.id;
    const films = this.state.films.find(item => {
      return item.id === routeId
    });
    if (!films) {
      return (<p>Ups...the film you are looking for doesn't exist</p>);
    }
    else {
      return < FilmDetail films={films} />
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <header />
            <div className="App__background">
              <Filters handleSearch={this.handleSearch} valueText={this.state.searchText} handleSorted={this.handleSorted} isSorted={this.state.isSorted} />
              <FilmList filterBySearch={this.filterBySearch()} isSorted={this.state.isSorted} />
            </div>
          </Route>
          <Route path='/films/:id' render={this.renderFilmsDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
