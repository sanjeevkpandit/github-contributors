import React from 'react';

import gitHubLogo from '../assets/images/GitHub-Mark.png';

const NavBar = ({handleToggleSearchResults, searchKey}) => (
  <nav>
    <h1 className="display-4 text-center logo">
      <a href="/github-contributors">
        {/* <img src={gitHubLogo} alt="GitHub Contributors"/> */}
        GitHub Contributors
      </a>
    </h1>
  </nav>
);

export default NavBar;
