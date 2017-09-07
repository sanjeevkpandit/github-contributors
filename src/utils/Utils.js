const getParameterByName = (name, url) => {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[[\]]/g, "\\$&");

  let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const getRepoUrl = () => {
  let user = getParameterByName('user');
  let repo = getParameterByName('repo');

  if (!user && !repo) {
    user = 'sanjeevkpandit';
    repo = 'github-contributors';
  }

  return {
    user,
    repo
  };
};

export {
  getRepoUrl
};
