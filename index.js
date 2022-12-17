const { pageFetcher } = require('./fetcher');
const [url, filePath] = [process.argv[2], process.argv[3]];
const fs = require('fs');

// After the http request is complete, take the data that's received and write it to a file in the local filesystem.
pageFetcher(url, (error, data, fileSize) => {
  if (error) {
    console.log('Error fetch details:', error);
    return;
  } else if (fs.existsSync(filePath)) {
    console.log('file exists');
    return;
  } else {
    fs.writeFile(filePath, data, (error) => {
      if (error) {
        console.log(error);
        return;
      } else {
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
      }
    });
  }
});