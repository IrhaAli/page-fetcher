const client = require('request');

// Make an http request and wait for the response.
const pageFetcher = (url, createFile) => {
  client.get(url, (error, response) => {
    let body;
    let bodySize;
    if (response.statusCode !== 200) {
      error = `Status Code: ${response.statusCode}, (See https://http.cat/${response.statusCode} for more info)`;
    } else {
      body = response.body;
      // FIGURE OUT HOW TO GET THE FILESIZE
      bodySize = body.length;
    }
    createFile(error, body, bodySize);
  });
};

module.exports = { pageFetcher };