const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const { Server } = require('socket.io');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const io = new Server(http);

io.on('connection', (socket) => {
  console.log(`Socket Connected`, socket.id);
});

const PORT = 8000;

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
