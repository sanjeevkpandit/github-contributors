import axios from 'axios';
import React, { Component } from 'react';

import Contributor from './Contributor';

class ContributorsList extends Component {
  state = {
    repo: '',
    contributors: [],
    error: '',
    loading: true,
    view: 'thumbnail'
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/repos/${this.props.repo}/contributors`)
      .then(response => {
        this.setState({
          repo: this.props.repo,
          contributors: response.data,
          loading: false
        });
      })
    .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  }

  handleChangeListingView = view => {
    this.setState({view});
  }

  render() {
    const { error, loading, contributors } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Unable to fetch repository information. Please check the username and repository and try again.</div>
    }

    return (
      <div>
        <h2 className="text-center">
          <a href={`https://github.com/${this.props.repo}`} target="_blank">
            {this.props.repo}
          </a>
          <small className="text-muted"> {contributors.length} contributors</small>
        </h2>
        <div className="row">
          {contributors && contributors.map(contributor =>
            <Contributor key={`contributor-${contributor.id}`} contributor={contributor} />
          )}
        </div>
      </div>
    );
  }
};

export default ContributorsList;
