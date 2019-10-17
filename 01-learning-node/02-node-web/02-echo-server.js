const http = require("http");

const server = http.createServer();

server.on("request", (req, resp) => {
  if (req.method === "POST" && req.url == "/echo") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        resp.writeHead(200, { "Content-Type": "text/plain" });
        body = `Contenido del Chunk --> ${Buffer.concat(body).toString()}`;
        resp.end(body);
        console.log("body", body);
      });
  } else {
    resp.statusCode = 404;
    resp.end();
  }
});

server.listen(2098);
console.log("Running", {
  Port: 2098,
  statusCode: "Listening",
  url: "http://localhost:2098/",
});
