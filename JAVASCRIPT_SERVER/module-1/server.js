import http from "node:http";

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url == "/") {
    response.end("home page");
  }
  if (request.url == "/status") {
    response.end("Status page");
  }
});

server.listen(3000, () => {
  console.log("listening for requests on port 3000");
});