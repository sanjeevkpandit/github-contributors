import React, { Component } from 'react';

import * as Utils from '../utils/Utils';

import Footer from './Footer';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import ContributorsList from './ContributorsList';

class App extends Component {
  state = {
    showSearchResults: false
  };

  handleToggleSearchResults = showSearchResults => {
    this.setState({ showSearchResults });
  };

  render() {
    let mainEl = <ContributorsList userRepo={Utils.getRepoUrl()} />;

    if (this.state.showSearchResults || Utils.getParameterByName('search')) {
      mainEl = <SearchResults searchKey={Utils.getParameterByName('search')} />;
    }

    return (
      <div>
        <NavBar />
        <div className='container'>
          <SearchBar
            handleToggleSearchResults={this.handleToggleSearchResults}
            searchKey={Utils.getParameterByName('search')}
          />

          <hr />

          {mainEl}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
