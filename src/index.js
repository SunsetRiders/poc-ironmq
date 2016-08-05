// *** DEPENDENCIES
var express = require("express"),
  http = require('http');

// *** INTERNAL MODULES
var _QueueRoutes = require("./routes/queue.routes");

// *** INIT DEPENDENCIES
var QueueRoutes = new _QueueRoutes();

// *** APP
// TODO: REMOVE IT AND RECEIVE IT AS A ARGUMENT
var app = express(),
  server = http.createServer(app);

// *** ATTACHING ROUTE
QueueRoutes.attach(app);

// TODO: REMOVE IT
server.listen(3000, function() {
  console.log("running");
});
