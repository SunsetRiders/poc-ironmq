// *** DEPENDENCIES
var _QueueController = require("../controllers/queue.controller");


// *** INIT DEPENDENCIES
var QueueController = new _QueueController();


// *** CLASS
var QueueRoutes = (function() {
    // *** @construtor
    function QueueRoutes() {};


    // *** @routes
    QueueRoutes.prototype.get = {
      info: function() {},
      queueObject: function() {}
    };

    QueueRoutes.prototype.post = {
      message: function() {}
    };


    // *** @public_methods
    QueueRoutes.prototype.attach = function (app) {
      this.get.queueObject(app);
      this.get.info(app);

      this.post.message(app);
    };


    // *** @get
    QueueRoutes.prototype.get.info = function(app) {
      app.route("/mq/:name")
        .get(QueueController.get.info);
    };


    QueueRoutes.prototype.get.queueObject = function(app) {
      app.route("/mq/queue-object")
        .get(QueueController.get.queueObject);
    };

    // *** @post
    QueueRoutes.prototype.post.message = function(app) {
      app.route("/mq/:name/message")
        .post(QueueController.post.message);
    };

    return QueueRoutes;
})();

module.exports = QueueRoutes;
