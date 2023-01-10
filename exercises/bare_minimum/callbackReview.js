/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  /** GOALS
   *
   * read file
   * return only the first line
   *
   * Psuedo:
   * I: FilePath
   * O: Line of a file as a string
   *
   * var line;
   * readFile(filePath, utf8, (file) => {
   *  line = file.split(/\r?\n/)[0]
   * }
   */

  fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) {
      cb(err);
    } else {
      let line = file.split(/\r?\n/)[0];
      cb(null, line);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request('get', url, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
