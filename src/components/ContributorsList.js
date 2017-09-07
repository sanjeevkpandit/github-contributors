import axios from 'axios';
import React, { Component } from 'react';
import Loader from 'halogen/BounceLoader';

import Contributor from './Contributor';

class ContributorsList extends Component {
  state = {
    user: '',
    repo: '',
    contributors: [],
    error: '',
    loading: true,
    view: 'thumbnail'
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/repos/${this.props.userRepo.user}/${this.props.userRepo.repo}/contributors`)
      .then(response => {
        this.setState({
          repo: this.props.repo,
          contributors: response.data,
          loading: false
        });

        document.title = this.props.userRepo.user + '/' + this.props.userRepo.repo + ' | Github Contributors';
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
      return (
        <div className="container text-center loading-container">
          <Loader color="#26A65B" size="48px" margin="4px" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="container">
          <div className="alert alert-danger" role="alert">
            Unable to fetch repository information. Please check the username and repository and try again.
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>
              <a href={`https://github.com/${this.props.userRepo.user}`} target="_blank">
                {this.props.userRepo.user}
              </a>
              <small className="text-muted"> / </small>
              <a href={`https://github.com/${this.props.userRepo.user}/${this.props.userRepo.repo}`} target="_blank">
                {this.props.userRepo.repo}
              </a>
              <small className="text-muted">
                {` ${contributors.length} ${contributors.length === 1 ? 'contributor' : 'contributors'}`}
              </small>
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            {contributors && contributors.map(contributor =>
              <Contributor key={`contributor-${contributor.id}`} contributor={contributor} />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ContributorsList;
