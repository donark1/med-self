import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Createprofile from './pages/createprofile';
import Bodyparts from './pages/bodyparts';
import Symptoms from './pages/symptoms';
import Results from './pages/results';


export default class App extends React.Component {
  render() {
    return (
      <div>
          <Link className="px-4" to="/"><img src="/images/Med-Self_Logo.jpg" alt="Med-Self" className="logo" /></Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createprofile">
          <Createprofile />
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
