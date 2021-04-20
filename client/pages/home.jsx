import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
    this.handleCreateProfileSubmit = this.handleCreateProfileSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleCreateProfileSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/createprofile`);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/login`);
  }

render () {
  return (
    <>
      <div>
        <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImage" />
      </div>
      <div className="goal">
        <p>Our goal is to provide an application that will assist and provide you with the best diagnosis and treatment information to get you back to a healthy life.With professional expertise and first hand user experience, you will get a wide range of options and ideas.</p>
        <p>So go ahead, create a profile, and lets get you feeling great again!</p>
      </div>
      <div className="buttons">
        <form type="submit" onSubmit={this.handleCreateProfileSubmit} >
          <button className="profile-button" >Create Profile</button>
        </form>
      </div>
      <div className="buttons">
        <form type="submit" onSubmit={this. handleLoginSubmit} >
          <button className="login">Login</button>
        </form>
      </div>
    </>
    );
  }
}

export default withRouter(Home);
