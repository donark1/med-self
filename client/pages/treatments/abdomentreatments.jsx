import React from 'react';
import { withRouter } from 'react-router-dom';

class AbdomenTreatments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: null
    };
  }

  render() {

    return (
      <div className="container">

        <h1 className="text-center">AbdomenTreatments Page</h1>

      </div>
    );
  }
}

export default withRouter(AbdomenTreatments);
