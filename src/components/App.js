import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dataFilms } from '../services/api';
import Header from './Header';
import Filters from './Filters';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import Loader from './Loader';
import movies from '../data/movies.json';
import '../stylesheets/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchFilm: '',
      isSorted: false,
      selectDirector: '',
      loading: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filterFilms = this.filterFilms.bind(this);
    this.renderFilmsDetail = this.renderFilmsDetail.bind(this);
    this.handleSorted = this.handleSorted.bind(this);
    this.handleSelectDirector = this.handleSelectDirector.bind(this);
  }

  //API call & Cover of movies added

  componentDidMount() {
    dataFilms().then(filmsData => {
      if (filmsData === undefined) {
        return this.setState({ loading: true });
      }
      else {
        for (let i = 0; i < filmsData.length; i++) {
          for (let j = 0; j < movies.length; j++) {
            if (filmsData[i].title === movies[j].name) {
              filmsData[i].urlCover = movies[j].url
            }
          }
        }
        return this.setState({ films: filmsData, loading: false });
      }
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
      : this.setState({ isSorted: false })
  }

  //Filter of directors
  handleSelectDirector(selectDirector) {
    this.setState(selectDirector)
  }

  //Filter of films
  filterFilms() {
    const films = this.state.films;
    const director = this.state.selectDirector;
    const search = this.state.searchFilm;

    return films
      .filter(film => {
        return film.title.trim().toLowerCase().includes(search);
      })
      .filter(films => {
        return (director === '') ? true : films.director === director
      })

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
    console.log(this.state);
    return (
      <div className="App" >
        {this.state.loading
          ? (<Loader />)
          : (<>
            < Header />
            <Switch>
              <Route exact path='/'>
                <header />
                <div className="App__background">
                  <Filters
                    handleSearch={this.handleSearch}
                    valueText={this.state.searchText}
                    handleSorted={this.handleSorted}
                    isSorted={this.state.isSorted}
                    handleSelectDirector={this.handleSelectDirector}
                    selectDirector={this.selectDirector} />
                  <FilmList
                    filterFilms={this.filterFilms()}
                    isSorted={this.state.isSorted} />
                </div>
              </Route>
              <Route path='/films/:id' render={this.renderFilmsDetail} />
            </Switch>
          </>)}
      </div >
    );
  }
}

export default App;
