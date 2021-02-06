import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Bodyparts from './pages/bodyparts';
import Symptoms from './pages/symptoms';
import Results from './pages/results';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <div className="text-center my-3">
            <Link className="px-4" to="/">Home</Link>
            <Link className="px-4" to="/bodyparts">Body Parts</Link>
            <Link className="px-4" to="/symptoms">Symptoms</Link>
            <Link className="px-4" to="/results">Results</Link>
          </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bodyparts">
          <Bodyparts />
        </Route>
        <Route path="/symptoms">
          <Symptoms />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
      </div>
    );
  }
}
