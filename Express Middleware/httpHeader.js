const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = () => {
  // Write your code here

  console.log(
    `Content-Type with value application/json has been set successfully!`
  );
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.set("Content-Type", "application/json");
  res.send(`get method called!`);
});
server.listen(5000);
