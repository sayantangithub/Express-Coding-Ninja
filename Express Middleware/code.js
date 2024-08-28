const express = require("express");
const server = express();
server.get("/", (req, res, next) => {
  console.log("The request has hit this middleware");
  next();
});
server.get("/", (req, res) => {
  res.send("The request has reached the last middleware");
});

server.listen(3050, () => {
  console.log("Server is listening to the port 3050");
});
