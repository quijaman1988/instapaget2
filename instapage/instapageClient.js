var rp = require('request-promise');

const INSTAPAGE_API_URL ="http://app.instapage.com/api/plugin"
const standardHeaders = {'integration':'wordpress'}

const ENDPOINTS = {
  LOGIN: {
    method: 'POST',
    url: '/page'
  },
  GET_ACCOUNT_KEYS: {
    method: 'POST',
    url: '/page/get-account-keys'
  },
  GET_PAGE_LIST: {
    method: 'POST',
    url: '/page/list'
  },
  CONNECT_ACCOUNT: {
    method: 'POST',
    url: '/page/connection-status'
  }
}

function buildRequest(name,data) {
  console.log(data)
  const params = {
    url: buildURL(name),
    method: ENDPOINTS[name].method,
    headers: standardHeaders,
    json: true,
  }
  switch(name) {
    case "LOGIN":
      params.formData = data;
      break;
    case "GET_ACCOUNT_KEYS":
      params.headers.usertoken = data;
      break;
    case "GET_PAGE_LIST":
      params.headers.accountkeys = data;
      break;
    case "CONNECT_ACCOUNT":
      params.headers.accountkeys = data.accountkeys;
      params.formData = data;
      break;
  }
  return rp(params);
}

function buildURL(name) {
  return `${INSTAPAGE_API_URL}${ENDPOINTS[name].url}`
}

module.exports = {
  buildRequest: buildRequest
}
