import React from 'react';
import { withRouter } from 'react-router-dom';

function TreatmentsItem({ treatments, indexValue }) {
  const { treatmentsname } = treatments;

  return (
    <li value={treatments.id} key={indexValue} className="list-group-item">
      {treatmentsname}
    </li>
  );
}

class HeadNeckTreatments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treatments: null
    };
  }

  componentDidMount() {
    const ids = this.props.match.params;

    fetch('/api/treatments/headnecktreatments', {
      method: 'POST',
      body: JSON.stringify(ids),
      headers: { 'content-type': 'application/json' }
    })
      .then(res => res.json())
      .then(treatments => {
        this.setState({ treatments });
      });
  }

  render() {
    const { treatments } = this.state;

    if (!treatments) {
      return <p className="text-center">Loading Treatments...</p>;
    }

    return (
      <div className="container">
        <h3 className="text-center">Here are suggested treatments for the diagnosis of your symptoms that you maybe experiencing:</h3>
        <div className="treatments-menu">
          <ul className="treatments">
          {
            treatments.length
              ? treatments.map((treatments, index) => <TreatmentsItem key={treatments.treatmentsId} treatments={treatments} indexValue={index} />)
              : <li className="list-group-item">No treatments specified</li>
          }
          </ul>
        </div>
        <div className="contact-email">
          <p className="p4">For further questions regarding your treatments, diagnosis, or for more information, please email us and a health professional will respond shortly:   medicalquestions@medself.com</p>
        </div>
        <div className="treatments-image">
          <img src="/images/head.png" alt="Body Image" className="bodyPartsImage" />
        </div>
        <div className="disclaimer">
          <p className="p3">*Please note that these treatments are suggested.  Consultation with doctor is strongly recommended.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(HeadNeckTreatments);
