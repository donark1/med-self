import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Createprofile from './pages/createprofile';
import Bodyparts from './pages/bodyparts';
import Symptoms from './pages/symptoms';
import Results from './pages/results';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.createProfile = this.createProfile.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => console.error(error));
  }

  createProfile(newUser) {
    const userList = this.state.users;
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(newUser => {
        userList.push(newUser);
        this.setState({ users: userList });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
          <Link className="px-4" to="/"><img src="/images/Med-Self_Logo.jpg" alt="Med-Self" className="logo" /></Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createprofile">
          <Createprofile onSubmit={this.createProfile} />
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
