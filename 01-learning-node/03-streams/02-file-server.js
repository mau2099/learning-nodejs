const fs = require("fs");
const server = require("http").createServer();
const path = require("path");

filePath = path.join(__dirname, "big");

server.on("request", (req, resp) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log("ocurrió un error", err);
    }
    resp.end(data);
  });
});

server.listen(3000);
console.log("Running", {
  Port: 3000,
  Description: "Servidor sin uso de streams de datos",
  statusCode: 200,
  url: "http://localhost:3000/",
  bigfilePath: filePath,
});
