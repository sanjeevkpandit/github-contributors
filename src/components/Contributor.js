import React from 'react';

const Contributor = ({contributor}) => {
  return (
    <div className="col-sm-2">
      <div className="card">
        <img className="card-img-top contributor-image" src={contributor.avatar_url} alt={contributor.login}/>
        <div className="card-block">
          <a className="username" href={contributor.html_url} target="_blank">{contributor.login}</a>
          <p className="card-text">
            <small>{contributor.contributions} commits</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contributor;
