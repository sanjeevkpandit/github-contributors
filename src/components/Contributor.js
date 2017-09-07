import React from 'react';

const Contributor = ({contributor}) => {
  return (
    <div className="col-sm-2 text-center">
      <div className="card">
        <a href={contributor.html_url} target="_blank">
          <img className="card-img-top contributor-image" src={contributor.avatar_url} alt={contributor.login}/>
        </a>
        <div className="card-block text-center">
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
