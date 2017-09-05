import axios from 'axios';
import React, { Component } from 'react';

import Contributor from './Contributor';

class ContributorsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: '',
      contributors: [],
      error: '',
      loaded: false,
      activeListingView: 'thumbnail'
    };

    this.handleChangeListingView = this.handleChangeListingView.bind(this);
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/repos/${this.props.repo}/contributors`)
      .then(response => {
        this.setState({
          repo: this.props.repo,
          contributors: response.data,
          loaded: true
        });
      })
    .catch(error => {
      console.log(error);
        this.setState({
          error: error,
          loaded: true
        });
      });
  }

  handleChangeListingView(listingView) {
    this.setState({
      activeListingView: listingView
    });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <div>Unable to fetch repository information. Please check the username and repository and try again.</div>
    }

    let elements = this.state.contributors.map(contributor => <Contributor key={`contributor-${contributor.id}`} contributor={contributor} />);

    let listingViewElement = <div onClick={() => this.handleChangeListingView('list')} className={`list-view ${this.state.activeListingView === 'list' ? 'active' : ''}`} />;
    let thumbnailViewElement = <div onClick={() => this.handleChangeListingView('thumbnail')} className={`thumbnail-view ${this.state.activeListingView === 'thumbnail' ? `active` : ''}`} />;

    return (
      <div className="contributor-wrapper">
        <h1 className="repo-title clearfix">
          <a className="repo-name" href={`https://github.com/${this.props.repo}`} target="_blank">
            {this.props.repo}
          </a>
          <span className="contributors-count">{this.state.contributors.length} contributors</span>
          <div className="listing-wrapper">
            {listingViewElement}
            {thumbnailViewElement}
          </div>
        </h1>
        <div className={`contributors-list clearfix ${this.state.activeListingView}`}>
          {elements}
        </div>
      </div>
    );
  }
};

export default ContributorsList;