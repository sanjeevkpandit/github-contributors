import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
import ContributorsList from './ContributorsList';

const App = () => (
  <div>
    <NavBar />
    <ContributorsList repo="facebook/react" />
    <Footer />
  </div>
);

export default App;
