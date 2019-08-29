const API_KEY =
  '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5';
const CORS_API = 'https://cors-anywhere.herokuapp.com/';
const DOMAIN = CORS_API + 'lamppoststudios.api-us1.com/api/3/';
const ENDPOINTS = {
  contacts: `${DOMAIN}contacts`
};

/**
 * Build Fetch Query String
 * @param {String} url - fetch url
 * @param {Object} headers - key/values for request header
 * @param {Object} params -  key/values for request parameters
 */
const buildQuery = (uri, params) => {
  if (!params) return uri;
  return `${uri}?${Object.keys(params).reduce((acc, curr, index) => {
    return acc + `${index !== 0 ? '&' : ''}${curr}=${params[curr]}`;
  }, '')}`;
};

/**
 * Request Config
 * @typedef {Object} RequestConfig
 * @property {String} resource - resource type
 * @property {Object} headers - key/values for request header
 * @property {Object} config - key/values for additional fetch configs
 * @property {Object} params -  key/values for request parameters
 */

/**
 * Build Fetch Query String
 * @param {RequestConfig} - The {@link RequestConfig} for a Fetch
 * @returns {Promise} fetch promise
 */
const buildFetch = ({ resource, headers, config, params }) => {
  console.log('buildFetch buildQuery', buildQuery(ENDPOINTS[resource], params));
  return fetch(buildQuery(ENDPOINTS[resource], params), {
    method: 'GET',
    mode: 'cors',
    ...config,
    headers: {
      'Api-Token': API_KEY,
      ...headers
    }
  });
};

export { buildFetch };
