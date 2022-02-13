import 'dotenv/config'
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
const app = express();
const httpServer = createServer(app);


const io = new Server(httpServer, { 
  cors: {
    origin: "*",
  }
});
io.on("connection", (socket) => {
  console.log('A user connected');
});

httpServer.listen(process.env.APP_PORT, () => {
  console.log('started, port:' + process.env.APP_PORT);
});