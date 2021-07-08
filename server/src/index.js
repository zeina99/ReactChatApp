const express = require("express");
const http = require("http");
const app = express();
const socketio = require("socket.io");
//const { sockets } = require("./sockets");

const PORT = 5050 || env.PORT;

const server = http.createServer(app);

// socket io stuff ..
const io = socketio(server, {
  cors: true,
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
});

io.on("connection", (socket) => {

  socket.on("message", (message) => {
    // emit message to all clients
    console.log("message: ",message)
    socket.broadcast.emit('all-messages', message)
  });
});

// server listening
server.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});

// sockets(server, PORT);
