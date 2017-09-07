import React from 'react';

import * as Utils from '../utils/Utils';

import NavBar from './NavBar';
import Footer from './Footer';
import ContributorsList from './ContributorsList';

const App = () => (
  <div>
    <NavBar />
    <ContributorsList userRepo={Utils.getRepoUrl()} />
    <Footer />
  </div>
);

export default App;
