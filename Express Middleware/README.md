# Express Middleware and its Functionality

Middleware functions are a series of functions with access to the request object
(req), the response object (res), and the next function in the application’s
request-response cycle. These functions can execute code, modify request and
response objects, or end the request-response cycle.

## Examples of Middleware Functions

- Logging requests: Middleware function to log information about incoming
  requests.
- Parsing request bodies: Middleware function to parse and extract data from
  the request body.
- Handling authentication: Middleware function to authenticate and authorize
  user requests.

## Example of Using Middleware

Handling GET Requests with Middleware:

```javascript
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
```

### Explanation

- Two route handlers are defined using app.get() both match the root URL (/).
- The first route handler includes a middleware function that logs the message
  "Middleware 1 executed" to the console and then calls next() to pass control
  to the next middleware or route handler.
- The second route handler includes a middleware function that sends the
  response "GET request to the homepage from middleware 2" back to the
  client.
