const http = require("http");

const server = http.createServer();

server.on("request", (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader("Content-Type", "text/plain");
  resp.end("Contenido mostrado en texto plano");
});

server.listen(2099);
console.log("Running", { Port: 2099, statusCode: "Listening", url: "http://localhost:2099/" });
