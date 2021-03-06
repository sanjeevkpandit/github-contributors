import React from 'react';

const Contributor = ({ contributor }) => {
  return (
    <div className='contributor col-lg-2 text-center'>
      <a href={contributor.html_url} target='_blank' rel='noopener noreferrer'>
        <img className='card-img-top contributor-image' src={contributor.avatar_url} alt={contributor.login} />
      </a>
      <a className='username' href={contributor.html_url} target='_blank' rel='noopener noreferrer'>
        {contributor.login}
      </a>
      <p className='card-text'>
        <small>{`${contributor.contributions} ${contributor.contributions > 1 ? 'commits' : 'commit'}`}</small>
      </p>
    </div>
  );
};

export default Contributor;
