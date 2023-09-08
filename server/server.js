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
    io.to(room).emit('user:joined', {email, id: socket.id});
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on('user:joined', ({to, offer}) => {
    io.to(to).emit('incomming:call', { from: socket.id, offer });
  });
});
