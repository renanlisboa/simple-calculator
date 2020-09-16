const express = require('express');
const server = express();

server.use(express.static('public'))

server.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html')
})

server.listen(3004);