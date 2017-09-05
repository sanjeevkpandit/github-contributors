import React, { Component } from 'react';

import ContributorsList from './ContributorsList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">GITHUB CONTRIBUTORS</h1>

        <ContributorsList repo="facebook/react" />
      </div>
    );
  }
}

export default App;
