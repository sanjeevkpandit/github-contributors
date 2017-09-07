import React from 'react';

import gitHubLogo from '../assets/images/GitHub-Mark.png';

const Footer = () => (
  <footer>
    <hr/>

    <div className="container">
      <p>
        &copy; 2017
        <span className="float-right">
          <a href="https://github.com/sanjeevkpandit/github-contributors" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} width="30" alt="GitHub Contributors"/>
          </a>
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
