const path = require('path');
const fileLister = require('./Node-lists/fileLister');

const directory = process.argv[2];
const extension = process.argv[3];


if (!directory || !extension) {
  console.error('Usage: node task4.js /path/to/directory/ extension');
  process.exit(1);
}

fileLister(directory, extension, (err, files) => {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('Filtered files:', files);
  }
});
