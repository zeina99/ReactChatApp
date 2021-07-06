import socketIO from "socket.io";

const io = socketIO();

io.on("connection", (socket) => {
  console.log("Client connected");
});
