const fs = require("fs");
const server = require("http").createServer();
const path = require("path");
const port = 3001;

filePath = path.join(__dirname, "big");

server.on("request", (req, resp) => {
  const src = fs.createReadStream(filePath);
  src.pipe(resp);
});

server.listen(port);
console.log("Running", {
  Port: port,
  Description: "Servidor con streams de datos para evitar aumentar la memoria",
  statusCode: 200,
  url: `http://localhost:${port}/`,
  bigfilePath: filePath,
});
