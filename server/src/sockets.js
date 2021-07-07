const socketIO = require("socket.io");


function sockets(server, PORT) {
const io = socketIO({
  cors: {
    cors:true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
  io.on("connection", (socket) => {
    console.log(socket.id);
  });

  server.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
  });
}
module.exports = { sockets };
