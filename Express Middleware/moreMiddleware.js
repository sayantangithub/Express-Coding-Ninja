const express = require("express");
const server = express();

function firstMiddleWare(req, res, next) {
  console.log("This is first middleware");
  next();
}
function secondMiddleWare(req, res, next) {
  console.log("This is second middleware");
  next();
}
function globalMiddleware(req, res, next) {
  console.log("This is Applixation level middleware");
  next();
}
server.use(globalMiddleware);
server.get("/send", [firstMiddleWare, secondMiddleWare], (req, res) => {
  res.send("Welcome to Node.js Application Page");
});

server.listen(3060, () => {
  console.log("Server is listening to port no 3060");
});
