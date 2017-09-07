import React from 'react';

import SearchInput from './SearchInput';

const NavBar = ({handleToggleSearchResults}) => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <button className="navbar-toggler navbar-toggler-right"
      type="button" data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">GitHub Contributors</a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      </ul>
      <SearchInput handleToggleSearchResults={handleToggleSearchResults} />
    </div>
  </nav>
);

export default NavBar;
