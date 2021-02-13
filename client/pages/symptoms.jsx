import React from 'react';

function SymptomsItem({ symptoms }) {
  const { description } = symptoms;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">{description}</div>
      </div>
    </li>
  );
}

export default class Symptoms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symptoms: null
    };
  }

  componentDidMount() {
    fetch('/api/symptoms')
      .then(res => res.json())
      .then(symptoms => {
        this.setState({ symptoms });
      });
  }

  render() {
    const { symptoms } = this.state;

    if (!symptoms) {
      return <p className="text-center">Loading Symptoms...</p>;
    }

    return (
      <div className="container">

        <h1 className="text-center">Symptoms Page</h1>

        <ul className="list-group list-group-flush">
          {
            symptoms.length
              ? symptoms.map(symptoms => <SymptomsItem key={symptoms.symptomId} symptoms={symptoms} />)
              : <li className="list-group-item">No Symptoms specified</li>
          }
        </ul>
      </div>
    );
  }
}
