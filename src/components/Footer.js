import React from 'react';

import gitHubLogo from '../assets/images/GitHub-Mark.png';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      &copy; 2017
      <span className='float-right'>
        <a href='https://github.com/sanjeevkpandit/github-contributors' target='_blank' rel='noopener noreferrer'>
          <img src={gitHubLogo} width='24' alt='GitHub Contributors' />
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
