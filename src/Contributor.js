import React from 'react';

const Contributor = props => {
  return (
    <div className="contributor">
      <a className="contributor-link" href={props.contributor.html_url} target="_blank">
        <img className="user-profile-image" src={props.contributor.avatar_url} alt={props.contributor.login} />
        <h1 className="username">{props.contributor.login}</h1>
      </a>
    </div>
  );
};

export default Contributor;
