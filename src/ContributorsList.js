import axios from 'axios';
import React, { Component } from 'react';

import Contributor from './Contributor';

class ContributorsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      repository: '',
      contributors: [],
      error: '',
      loaded: false
    };
  }

  componentDidMount() {
    let username = this.props.match.params.username,
        repository = this.props.match.params.repository;

    axios
      .get(`https://api.github.com/repos/${username}/${repository}/contributors`)
      .then(response => {
        this.setState({
          username: username,
          repository: repository,
          contributors: response.data,
          loaded: true
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loaded: true
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <div>Unable to fetch repository information. Please check the username and repository and try again.</div>
    }

    let elements = [];

    elements = this.state.contributors.map(contributor => <Contributor key={`contributor-${contributor.id}`} contributor={contributor} />);

    return (
      <div className="contributor-wrapper">
        <h1 className="repo-title">
          {this.props.match.params.repository}
          <span className="contributors-count">{this.state.contributors.length} contributors</span>
        </h1>
        <div className="contributors-list">
          {elements}
        </div>
      </div>
    );
  }
};

export default ContributorsList;
