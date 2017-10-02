import React, {Component} from 'react';

import {setLocationParam} from '../utils/Utils';

class SearchBar extends Component {
  state = {
    key: this.props.searchKey || ''
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="input-group">
                <input type="text"
                  value={this.state.key}
                  className="form-control form-control-lg"
                  placeholder="Search github repos"
                  onChange={this.handleInputChange} />
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="button">Search</button>
                </span>
              </div>
              <p id="passwordHelpBlock" className="form-text text-muted">
                Type react, atom, facebook/react etc.
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
