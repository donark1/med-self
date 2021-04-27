import React from 'react';
import { Route, Link } from 'react-router-dom';
import Createprofile from './createprofile';
import Login from './login';

export default function Home(props) {
  return (
    <>
      <div>
        <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImage" />
      </div>
      <div className="buttons">
        <Link className="profile-button" to="/createprofile">Create Profile</Link>
        <Link className="login" to="/login">Login</Link>
      </div>
      <Route path="/createprofile">
        <Createprofile />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}
