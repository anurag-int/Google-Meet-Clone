// A WebRTC signaling server is a server that manages the connections between peers, so we can do that by using socket.io  


const { Server } = require('socket.io');

const io = new Server(8000);

io.on('connection', socket => {
    console.log(`Socket Connected`, socket.id);
});

