import React from 'react';
import { Route, Link } from 'react-router-dom';
import Createprofile from './createprofile';

export default function Home(props) {
  return (
    <>
      <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImage" />
      <div className="goal">
        <p>Our goal is to provide an application that will assist and provide you with the best diagnosis and treatment information to get you back to a healthy life.With professional expertise and first hand user experience, you will get a wide range of options and ideas.</p>
        <p>So go ahead, create a profile, and lets get you feeling great again!</p>
      </div>
      <div>
        <Link className="profile-button" to="/createprofile">Create Profile</Link>
      </div>
      <Route path="/createprofile">
        <Createprofile />
      </Route>
    </>
  );
}
