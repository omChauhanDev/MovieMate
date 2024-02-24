const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
});
io.on("disconnect", (socket) => {
  console.log("A user disconnected", socket.id);
});
module.exports = {
  app,
  io,
  server,
};
