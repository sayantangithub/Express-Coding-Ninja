const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello World! This is Express Server");
});

server.listen(3040, () => {
  console.log("Server is listening to port 3040");
});
