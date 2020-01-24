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
  }

  //API call

  componentDidMount() {
    dataFilms().then(films => this.setState({ films }));
  }


  render() {
    console.log(this.state)
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <header className="App-header" />
            <Filters />
            <FilmList films={this.state.films} />
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
