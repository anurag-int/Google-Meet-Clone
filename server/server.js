const cors = require("cors");
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

const { Server } = require('socket.io');

const io = new Server(8000);

io.on('connection', socket => {
    console.log(`Socket Connected`, socket.id);
});

