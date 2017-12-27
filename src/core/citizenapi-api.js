import log from 'loglevel';

const citizenApiFetch = (url, method = 'GET', postdata = {}) => {
  let options = {
    method,
  };

  const fheaders = new Headers();
  fheaders.append('Content-Type', 'application/json');
  fheaders.append('Accept', 'application/json');
  //    fheaders.append('Access-Control-Allow-Origin', '*');
  // fheaders.append('mode', 'cors');

  if (method === 'POST') {
    options = Object.assign({}, options, {
      body: `${JSON.stringify(postdata)}`,
    });
  }

  options = Object.assign({}, options, {
    headers: fheaders,
  });

  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

const loginEmail = (apiPath, authData) => {
  log.debug('loginEmail', apiPath, authData);

  return skooldioFetch(apiPath, 'POST', {
    ...authData,
  });
};

export default {
  loginEmail,
};
