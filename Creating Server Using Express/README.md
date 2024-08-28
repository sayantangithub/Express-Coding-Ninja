# Creating a Server using Express

## Installing Express

To start working with Express, we must install it first. To do that, open your terminal
or command prompt and navigate to your project folder. Then, type the following
`npm install express`

## Creating Server using Express and Using GET Method

Now that we have Express installed create a server using it. First, create a new file
called app.js in your project folder. Then, add the following code:

## Require the Express module in your file

```javascript
const express = require("express");
```

2. Create an instance of the Express server
   const server

```javascript
const server = express();
```

3. In your app.js file, define a route that handles default GET requests to the root
   URL (/)

```javascript
server.get("/", (req, res) => {
  res.send("Hello World! This is Express Server");
});
```

4. Start the server on specific port:

```javascript
server.listen(3040, () => {
  console.log("Server is listening to port 3040");
});
```

5. In your terminal, run the `node server.js` command to start the server.
6. Visit http://localhost:3040 in your web browser to see the response from the
   server.

### Explanation:

- The server.get() method defines a route that handles GET requests to a
  specific URL.
- Inside the route handler function, the req parameter represents the client's
  request, and the res parameter represents the server's response.
- To send a response back to the client, use the res.send() method.
- The server.listen() method is used to start the server and listen for incoming
  requests on a specific port.
