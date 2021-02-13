import React from 'react';

function ResultsItem({ results }) {
  const { userForumDiagnosis } = results;

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">{userForumDiagnosis}</div>
      </div>
    </li>
  );
}

export default class results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null
    };
  }

  componentDidMount() {
    fetch('/api/results')
      .then(res => res.json())
      .then(results => {
        this.setState({ results });
      });
  }

  render() {
    const { results } = this.state;

    if (!results) {
      return <p className="text-center">Loading Results...</p>;
    }

    return (
      <div className="container">

        <h1 className="text-center">Results Page</h1>

        <ul className="list-group list-group-flush">
          {
            results.length
              ? results.map((results, i) => <ResultsItem key={i} results={results} />)
              : <li className="list-group-item">No results specified</li>
          }
        </ul>
      </div>
    );
  }
}
