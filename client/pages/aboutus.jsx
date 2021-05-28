import React from 'react';
import { withRouter } from 'react-router-dom';

class Aboutus extends React.Component {
  render() {
    return (
    <>
      <div className="goal">
        <p>Our goal is to provide an application that will assist and provide you with the best diagnosis and treatment information to get you back to a healthy life.With professional expertise and first hand user experience, you will get a wide range of options and ideas.</p>
      </div>
    </>
    );
  }
}

export default withRouter(Aboutus);
