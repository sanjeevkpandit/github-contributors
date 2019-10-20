import React, { Component } from 'react';

import { setLocationParam } from '../utils/Utils';

class SearchBar extends Component {
  state = {
    key: this.props.searchKey || ''
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.key.length) {
      return;
    }

    this.props.handleToggleSearchResults(true);

    setLocationParam('search', this.state.key);

    return;
  };

  handleInputChange = e => {
    this.setState({ key: e.target.value });
  };

  render() {
    return (
      <div className='row'>
        <form className='form-inline w-100' onSubmit={this.handleSubmit}>
          <div className='form-group col-sm-10'>
            <input
              type='text'
              className='form-control form-control-lg w-100'
              value={this.state.key}
              placeholder='Search github repos'
              onChange={this.handleInputChange}
            />
          </div>

          <div className='form-group col-sm-2'>
            <button type='submit' className='btn btn-lg btn-outline-primary w-100'>
              Search
            </button>
          </div>

          <div className='col-sm-10'>
            <p id='passwordHelpBlock' className='form-text text-muted'>
              Type react, atom, facebook/react etc.
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
