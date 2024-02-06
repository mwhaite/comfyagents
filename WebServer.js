const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

class WebServer {
  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketIo(this.server);
  }

  start() {
    this.app.use(bodyParser.json());
    this.app.use(express.static('public')); // Serve static files from the 'public' directory

    this.io.on('connection', (socket) => {
      console.log('A user connected');
      // Socket.IO event handlers here
    });

    this.server.listen(4000, () => {
      console.log('Server listening on port 4000');
    });
  }
}

module.exports = WebServer;
