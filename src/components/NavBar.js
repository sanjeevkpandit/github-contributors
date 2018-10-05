import React from 'react';

const NavBar = ({handleToggleSearchResults, searchKey}) => (
  <nav>
    <h1 className="display-4 text-center logo">
      <a href="/github-contributors">
        GitHub Contributors
      </a>
    </h1>
  </nav>
);

export default NavBar;
