import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dataFilms } from '../services/api';
import Header from './Header';
import '../stylesheets/app.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchFilm: ''
    };
    console.log(this.state.films);
  }

  //API call

  componentDidMount() {

    dataFilms().then(films => this.setState({ films }));

  }


  render() {

    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <header className="App-header">
              <p className="App-header">
                Edit <code>src/App.js</code> and save to reload.
        </p>

            </header>
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
