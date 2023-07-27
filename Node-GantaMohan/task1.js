
const http = require('http');


const PORT = 3000;

const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});


server.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
