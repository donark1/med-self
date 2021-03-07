import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Createprofile from './pages/createprofile';
import Bodyparts from './pages/bodyparts';
import Symptoms from './pages/symptoms';
import Results from './pages/results';
import Login from './pages/login';
import Logout from './pages/logout';
import Navbar from './components/navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      signInRedirect: false,
      signOutRedirect: false
    };
    this.createProfile = this.createProfile.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(newUser => {
        userList.push(newUser);
        this.setState({
          users: userList,
          profileRedirect: 'bodyparts'
        });
      })
      .catch(error => console.error(error));
  }

  login(loginUser) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(userLogin => {
        this.setState({
          users: userLogin,
          signInRedirect: 'bodyparts'
        });
      })
      .catch(error => console.error(error));
  }

  logout(logoutUser) {
    fetch('/api/logout', {
      method: 'POST',
      body: JSON.stringify(logoutUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(userLogout => {
        this.setState({
          users: userLogout,
          signOutRedirect: 'logout'
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div>
        <Link className="px-4" to="/"><img src="/images/Med-Self_Logo.jpg" alt="Med-Self" className="logo" /></Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createprofile">
          {this.state.profileRedirect === 'bodyparts'
            ? <Redirect to='/bodyparts' />
            : this.state.profileRedirect === 'home'
              ? <Redirect to='/' />
              : <Createprofile createProfile={this.createProfile} />}
        </Route>
        <Route path="/login">
          {this.state.signInRedirect === 'bodyparts'
            ? <Redirect to='/bodyparts' />
            : this.state.signInRedirect === 'home'
              ? <Redirect to='/' />
              : <Login login={this.login} />}
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
        <Route path="/logout">
          <Logout />
        </Route>
      </div>
    </>
    );
  }
}
