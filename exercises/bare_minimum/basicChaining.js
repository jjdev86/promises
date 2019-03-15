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


var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(readFilePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(null, data);
      }
    });
    // .then((data) => {
    //   getGitHubProfile.getGitHubProfileAsync(data.split('\n')[0])
    //     .then((user) => {
    //       fs.writeFile(writeFilePath, JSON.stringify(user), (err) => {
    //         if (err) { console.log(err); }
    //       });
    //     });
    // })
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
