const http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "http://localhost:3031",
      "Access-Control-Allow-Headers": "X-Pass"
    });
    response.end("Hello World\n");
  })
  .listen(3030);
