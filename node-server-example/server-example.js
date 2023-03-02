const http = require('http');

const PORT = 8081; // if you have a firewall, you may need to turn it off

function apiRequest(request, response) {
  // think about returning a file using a file Object...
  response.end(`<h1> It works! Path is ${request.url}</h1>`);
}

const server = http.createServer(apiRequest);
server.listen(PORT, function () {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});