const fs = require('fs');
const path = require('path');

function fileLister(directory, extension, callback) {
 
  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }

    
    const filteredFiles = files.filter((file) => path.extname(file) === `.${extension}`);

    
    callback(null, filteredFiles);
  });
}

module.exports = fileLister;
