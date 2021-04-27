import React from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends React.Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <>
        <div>
          <h1 className="logoutmessage">You have successfully logged out.</h1>
          <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyImage" />
        </div>
      </>
    );
  }
}

export default withRouter(Logout);
