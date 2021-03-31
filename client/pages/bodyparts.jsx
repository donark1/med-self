import React from 'react';
import { withRouter } from 'react-router-dom';

const bodypartvalue = [
  'headneck',
  'shouldersarmshands',
  'chest',
  'abdomen',
  'legsfeet'
];

function BodypartsItem({ bodyparts, indexValue }) {
  const { bodypartname } = bodyparts;
  return (
    <option value={bodypartvalue[indexValue]} className="list-group-item">
        {bodypartname}
    </option>

  );
}

class Bodyparts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyparts: null,
      routeString: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/bodyparts')
      .then(res => res.json())
      .then(bodyparts => {
        this.setState({ bodyparts });
      });
  }

  handleChange(event) {
    this.setState({ routeString: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push(this.state.routeString);
  }

  render() {
    const { bodyparts } = this.state;

    if (!bodyparts) {
      return <p className="text-center">Loading Body Parts...</p>;
    }

    return (
    <>
      <div className="container">
          <h1 className="text-center">Welcome User. </h1>
          <h1 className="text-center"> Please select area of concern: </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="bodyparts-menu">
            <select onChange={this.handleChange} className="bodyparts-list">
              <option>--Please choose an option--</option>
              {
                bodyparts.length
                  ? bodyparts.map((bodyparts, index) => <BodypartsItem key={bodyparts.bodyPartId} bodyparts={bodyparts} indexValue={index}/>)
                  : <option className="list-group-item">No Body Parts specified</option>
              }
            </select>
          </div>
        <div className="bodyparts-image">
          <img src="/images/body-image_blue.jpg" alt="Body Image" className="bodyPartsBodyImage" />
        </div>
          <div>
            <button type="submit" className="bodypart-submit">Submit</button>
          </div>
        </form>
      </div>
    </>
    );
  }
}

export default withRouter(Bodyparts);
