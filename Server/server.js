import { createServer } from "http";
import { Server } from "socket.io";


const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Replace with your actual frontend origin
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Connection successful");

  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {

    recipients.forEach((recipient) => {

      const newRecipients = recipients.filter((r) => r !== recipient);

      newRecipients.push(id);

      socket.broadcast.to(recipient).emit("receive-message", {

        recipients: newRecipients,
        sender: id,
        text,

      });

    });

  });
  
});

httpServer.listen(5000, () => {
  console.log("Socket.IO server listening on port 5000");
});
