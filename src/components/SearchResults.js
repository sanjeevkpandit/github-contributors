import axios from 'axios';
import Octoicon from 'react-octicon';
import React, {Component} from 'react';
import Loader from 'halogen/BounceLoader';

import * as CONSTANTS from '../utils/Constants';

class SearchResults extends Component {
  state = {
    results: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    this.fetchSearchResults(this.props.searchKey);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.searchKey && (this.props.searchKey !== nextProps.searchKey)) {
      this.fetchSearchResults(nextProps.searchKey);
    }
  }

  fetchSearchResults = (keyword) => {
    if (!keyword.length) {
      return;
    }

    this.setState({
      loading: true
    });

    axios
      .get(`https://api.github.com/search/repositories?q=${keyword}+in:name`)
      .then(response => {
        this.setState({results: response.data, loading: false});

        document.title = 'Search results for ' + keyword + ' | Github Contributors';
      })
      .catch(error => {
        this.setState({error: true, loading: false});
      });
  }

  render() {
    const {error, loading, results} = this.state;

    if (loading) {
      return (
        <div className="container text-center loading-container">
          <Loader color="#26A65B" size="48px" margin="4px"/>
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

    if (!results.total_count) {
      return (
        <div className="container">
          <div className="alert alert-danger" role="alert">
            No results found for '{this.props.searchKey}'.
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div className="alert alert-info" role="alert">
            Search results for '{this.props.searchKey}':
          </div>
          <div>
            <div className="list-group">
              {results.items && results.items.map(result => (
                <li className="list-group-item justify-content-between"
                  key={`contributor-${result.id}`}>
                  <a href={`?user=${result.owner.login}&repo=${result.name}`}>
                    {result.full_name}
                  </a>
                  <span className="pull-right">
                    <a className="badge badge-default badge-pill"
                      href={`${result.html_url}/${CONSTANTS.GITHUB.GITHUB_STARGAZERS_URL}`}
                      target="_blank">
                      <Octoicon name="star"/> {result.stargazers_count}
                    </a>
                    <a className="badge badge-default badge-pill"
                    href={`${result.html_url}/${CONSTANTS.GITHUB.GITHUB_NETWORK_URL}`}
                      target="_blank">
                      <Octoicon name="repo-forked"/> {result.forks_count}
                    </a>
                  </span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
