import axios from 'axios';
import React, {Component} from 'react';

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
          Loading....
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
                <a href={`?user=${result.owner.login}&repo=${result.name}`}
                  className="list-group-item"
                  key={`contributor-${result.id}`}>
                  {result.full_name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
