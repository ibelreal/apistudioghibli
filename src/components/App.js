import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dataFilms } from '../services/api';
import Header from './Header';
import Filters from './Filters';
import FilmList from './FilmList';
import '../stylesheets/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchFilm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  //API call

  componentDidMount() {
    dataFilms().then(films => this.setState({ films }));
  }

  //Search events

  handleSearch(searchFilm) {
    this.setState({ searchFilm });
  }


  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <header className="App-header" />
            <Filters handleSearch={this.handleSearch} value={this.state.searchText} />
            <FilmList films={this.state.films} />
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
