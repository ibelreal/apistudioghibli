import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dataFilms } from '../services/api';
import Header from './Header';
import '../stylesheets/app.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFilms: [],
      searchFilm: ''
    };
  }

  //API call

  componentDidMount() {

    dataFilms().then(allFilms => this.setState({ allFilms }));
    console.log(this.setState.allFilms)
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
        </p>
              Learn React
      </header>
          </Route>
        </Switch>
      </div >
    );
  }
}

export default App;
