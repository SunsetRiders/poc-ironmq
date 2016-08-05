// *** DEPENDENCIES
var iron_mq = require('iron_mq'),
  imq = new iron_mq.Client({
    "project_id":"57a4d066bc022f00078da220",
    "token":"z95cSju9hhXb7DwDhBxn",
    "host":"mq-aws-eu-west-1-1.iron.io"
  }); // TODO: EXTERNAL IT AS A ARGUMENT

// *** CLASS
var QueueController = (function() {
  function QueueController() {};

  // *** @routes
  QueueController.prototype.get = {
    info: function() {},
    queueObject: function() {}
  }

  QueueController.prototype.post = {
    message: function () {}
  }

  // *** @public_methods

  // *** @get
  QueueController.prototype.get.info = function(req, res) {
    var name = req.params.name,
      queue = imq.queue(name);

    queue.info(function(error, body) {
      res.status(200).send(body);
    });
  };

  QueueController.prototype.get.queueObject = function(req, res) {
    res.status(200).json({ "foo": "bar" });
  };

  // *** @post
  QueueController.prototype.post.message = function(req, res) {
    var name = req.params.name,
      queue = imq.queue(name),
      data = {
        "foo":"bar"
      },
      message = {
        body: {
          "foo": "bar"
        },
        delay: 0
      };

    queue.post({"teste": "123"}, function(error, body) {
      res.status(200).send(body);
    });
  };

  return QueueController;
})();

module.exports = QueueController;
