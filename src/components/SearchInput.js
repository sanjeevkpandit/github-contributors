import React, {Component} from 'react';

import {setLocationParam} from '../utils/Utils';

class SearchInput extends Component {
  state = {
    key: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.key.length) {
      return;
    }

    this.props.handleToggleSearchResults(true);

    setLocationParam('search', this.state.key);

    return;
  }

  handleInputChange = (e) => {
    this.setState({key: e.target.value});
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input id="search-input" className="form-control mr-sm-2" type="text" placeholder="Search github repos" onChange={this.handleInputChange}/>
        <button className="btn btn-outline-success my-2 my-sm-0" value={this.state.key} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchInput;
