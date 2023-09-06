// A WebRTC signaling server is a server that manages the connections between peers, so we can do that by using socket.io  


const { Server } = require('socket.io');


const io = new Server(8000, {
    cors: true
})

const emailToSocketIdMap = new Map();
const socketIdToEmailMap = new Map();

io.on('connection', (socket) => {
  socket.on("room:join", (data) => {
    const { email, room } = data;
    emailToSocketIdMap.set(email, socket.id);
    socketIdToEmailMap.set(socket.id, email);
    io.to(socket.id).emit("room:join", data);
  });
});
