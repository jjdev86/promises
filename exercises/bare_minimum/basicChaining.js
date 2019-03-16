/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfile = require('./promisification');

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  // Read file to get username
  return new Promise((resolve, reject) => {
    fs.readFileAsync(readFilePath, 'utf8')
      .then((data) => {
        const user = data.split('\n')[0];
        getGitHubProfile.getGitHubProfileAsync(user)
          .then((data) => {
            const userProfile = JSON.stringify(data);
            fs.writeFileAsync(writeFilePath, userProfile)
              .then(() => {
                resolve();
              });
          });
      });
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
