import React from 'react';

const Contributor = props => {
  return (
    <div className="contributor">
      <img className="user-profile-image" src={props.contributor.avatar_url} alt={props.contributor.login} />
      <div className="user-info">
        <a className="username" href={props.contributor.html_url} target="_blank">{props.contributor.login}</a>
        <p className="commits">{props.contributor.contributions} commits</p>
      </div>
    </div>
  );
};

export default Contributor;
