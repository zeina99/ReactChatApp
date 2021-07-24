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
  // recieve join event
  socket.on("join", (user_data) => {
    // broadcast user joining message
    socket.to(user_data.room).emit("user-join", user_data);
    // socket join to room
    socket.join(user_data.room);
  });

  socket.on("message", (message) => {
    // broadcast message to all people except the sender
    socket.to(message.room).emit("all-messages", message);
  });
});

// server listening
server.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});

// sockets(server, PORT);
