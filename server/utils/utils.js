var base64 = require('base-64');
var utf8 = require('utf8');

function encodeApiKeys(apiKeys) {
  var arr = [apiKeys[0]];
  var keys = JSON.stringify(arr)
  var bytes = utf8.encode(keys);
  var encoded = base64.encode(bytes);
  return encoded;
}

module.exports = {
  encodeApiKeys: encodeApiKeys
}
