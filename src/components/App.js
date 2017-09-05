import React from 'react';

import ContributorsList from './ContributorsList';

const App = () => (
  <div className="container">
    <h1 className="title">GitHub Contributors</h1>

    <ContributorsList repo="facebook/react" />
  </div>
);

export default App;
