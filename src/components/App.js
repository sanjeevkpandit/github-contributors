import React from 'react';

import NavBar from './NavBar';
import ContributorsList from './ContributorsList';

const App = () => (
  <div>
    <NavBar />
    <ContributorsList repo="facebook/react" />
  </div>
);

export default App;
