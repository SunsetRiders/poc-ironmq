// *** DEPENDENCIES
var express = require("express"),
  http = require('http');

// *** INTERNAL MODULES
var _QueueObjectRoutes = require("./routes/queue-object.routes");

// *** INIT DEPENDENCIES
var QueueObjectRoutes = new _QueueObjectRoutes();

// *** APP
// TODO: REMOVE IT AND RECEIVE IT AS A ARGUMENT
var app = express(),
  server = http.createServer(app);

// *** ATTACHING ROUTE
QueueObjectRoutes.attach(app);

server.listen(3000, function() {
  console.log("running");
});
