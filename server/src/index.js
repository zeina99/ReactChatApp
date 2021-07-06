const express = require("express");
const http = require("http");
const app = express();

const PORT = 5050 || env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
