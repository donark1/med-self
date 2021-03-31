import React from 'react';
import { withRouter } from 'react-router-dom';

function SymptomsItem({ symptoms, indexValue }) {
  const { symptomname } = symptoms;

  return (
    <option value={symptoms.id} key={indexValue} className="list-group-item">
      {symptomname}
    </option>
  );
}

class Abdomen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: null,
      routeString: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const ids = this.props.match.params;

    fetch('/api/symptoms/abdomen', {
      method: 'POST',
      body: JSON.stringify(ids),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(symptoms => {
        this.setState({ symptoms });
      });
  }

  handleChange(event) {
    this.setState({ routeString: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { symptoms, routeString } = this.state;
    const index = symptoms.findIndex(s => s.symptomname === routeString);
    const { bodyPartId, symptomId } = symptoms[index];
    this.props.history.push(`/abdomendiagnosis/${bodyPartId}/${symptomId}`);
  }

  render() {
    const { symptoms } = this.state;

    if (!symptoms) {
      return <p className="text-center">Loading Symptoms...</p>;
    }

    return (
      <>
        <div className="container">
          <h1 className="text-center"> Please select your symptom: </h1>
          <form onSubmit={this.handleSubmit}>
            <div className="symptoms-menu">
              <select onChange={this.handleChange} className="symptom-list">
                <option>--Please choose an option--</option>
                {
                  symptoms.length
                    ? symptoms.map((symptoms, index) => <SymptomsItem key={symptoms.symptomId} symptoms={symptoms} indexValue={index} />)
                    : <option className="list-group-item">No Symptoms specified</option>
                }
              </select>
            </div>
            <div className="symptoms-image">
              <img src="/images/abdomen.png" alt="Body Image" className="bodyPartsImage" />
            </div>
            <div>
              <button type="submit" className="symptom-submit">Submit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(Abdomen);
