import React from 'react';
import { withRouter } from 'react-router-dom';

function DiagnosisItem({ diagnosis, indexValue }) {
  const { diagnosisname } = diagnosis;

  return (
    <option value={diagnosis.id} key={indexValue} className="list-group-item">
      {diagnosisname}
    </option>
  );
}

class HeadNeckDiagnosis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      diagnosis: null,
      routeString: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const ids = this.props.match.params;

    fetch('/api/diagnosis/headneckdiagnosis', {
      method: 'POST',
      body: JSON.stringify(ids),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(diagnosis => {
        this.setState({ diagnosis });
      });
  }

  handleChange(event) {
    this.setState({ routeString: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { diagnosis, routeString } = this.state;
    const index = diagnosis.findIndex(d => d.diagnosisname === routeString);
    const { symptomId, diagnosisId } = diagnosis[index];
    this.props.history.push(`/headnecktreatments/${symptomId}/${diagnosisId}`);
  }

  render() {
    const { diagnosis } = this.state;

    if (!diagnosis) {
      return <p className="text-center">Loading Diagnosis...</p>;
    }

    return (
      <div className="container">
        <h1 className="text-center">Here are your possible head/neck diagnosis(please select an option for suggested treatment):</h1>
        <div className="ul-list-container">
          <form onSubmit={this.handleSubmit}>
            <div className="diagnosis-menu">
              <select onChange={this.handleChange} className="diagnosis-list">
                <option>--Please choose an option--</option>
                {
                  diagnosis.length
                    ? diagnosis.map((diagnosis, index) => <DiagnosisItem key={diagnosis.diagnosisId} diagnosis={diagnosis} indexValue={index} />)
                    : <li className="list-group-item">No diagnosis specified</li>
                }
              </select>
            </div>
            <div className="diagnosis-image">
              <img src="/images/head.png" alt="Body Image" className="bodyPartsImage" />
            </div>
            <div>
              <button type="submit" className="diagnosis-submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="disclaimer">
          <p className="p3">*Please note that this list of possible diagnosis are suggested and does not necessarily reflect the most accurate diagnosis.  Consultation with doctor is strongly recommended.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(HeadNeckDiagnosis);
