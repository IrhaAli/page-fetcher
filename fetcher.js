const client = require('request');

// Make an http request and wait for the response.
// createFile is a callback
const pageFetcher = (url, createFile) => {
  client(url, (error, response, body) => {
    let bodySize;
    if (response.statusCode !== 200) {
      error = `Status Code: ${response.statusCode}, (See https://http.cat/${response.statusCode} for more info)`;
    } else {
      bodySize = body.length;
    }
    createFile(error, body, bodySize);
  });
};

module.exports = { pageFetcher };