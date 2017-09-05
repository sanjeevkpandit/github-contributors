import React from 'react';

const Contributor = ({contributor}) => {
  return (
    <div className="contributor">
      <img className="user-profile-image" src={contributor.avatar_url} alt={contributor.login} />
      <div className="user-info">
        <h2>
          <a className="username" href={contributor.html_url} target="_blank">{contributor.login}</a>
        </h2>
        <p className="commits">{contributor.contributions} commits</p>
      </div>
    </div>
  );
};

export default Contributor;
