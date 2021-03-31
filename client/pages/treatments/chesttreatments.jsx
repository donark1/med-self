import React from 'react';
import { withRouter } from 'react-router-dom';

class ChestTreatments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: null
    };
  }

  render() {

    return (
      <div className="container">

        <h1 className="text-center">Chest Treatments Page</h1>

      </div>
    );
  }
}

export default withRouter(ChestTreatments);
