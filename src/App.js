import React, { Component } from 'react';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">List of contributors in your/other's project.</h1>

        <Routes />
      </div>
    );
  }
}

export default App;
