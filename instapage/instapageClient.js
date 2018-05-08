var rp = require('request-promise');

const INSTAPAGE_API_URL ="http://app.instapage.com/api/plugin"

const ENDPOINTS = {
  LOGIN: {
    headers: {
      'integration':'wordpress',
    },
    method: 'POST',
    url: '/page'
  }
}

function buildRequest(name, body) {
  const params = {
    url: buildURL(name),
    method: ENDPOINTS[name].method,
    headers: ENDPOINTS[name].headers,
    json: true,
    formData:body
  }
  return rp(params);
}

function buildURL(name) {
  return `${INSTAPAGE_API_URL}${ENDPOINTS[name].url}`
}

module.exports = {
  buildRequest: buildRequest
}
