import React from 'react';

function BodypartsItem({ bodyparts }) {
  const { name } = bodyparts;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-12">{name}</div>
      </div>
    </li>
  );
}

export default class Bodyparts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyparts: null
    };
  }

  componentDidMount() {
    fetch('/api/bodyparts')
      .then(res => res.json())
      .then(bodyparts => {
        this.setState({ bodyparts });
      });
  }

  render() {
    const { bodyparts } = this.state;

    if (!bodyparts) {
      return <p className="text-center">Loading Body Parts...</p>;
    }

    return (
      <div className="container">
        <h1 className="text-center">Bodyparts Page</h1>

        <ul className="list-group list-group-flush">
          {
            bodyparts.length
              ? bodyparts.map(bodyparts => <BodypartsItem key={bodyparts.bodyPartId} bodyparts={bodyparts} />)
              : <li className="list-group-item">No Body Parts specified</li>
          }
        </ul>
      </div>
    );
  }
}
