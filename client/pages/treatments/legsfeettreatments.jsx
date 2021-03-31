import React from 'react';
import { withRouter } from 'react-router-dom';

class LegsFeetTreatments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: null
    };
  }

  render() {

    return (
      <div className="container">

        <h1 className="text-center">Legs/Feet Treatments Page</h1>

      </div>
    );
  }
}

export default withRouter(LegsFeetTreatments);
