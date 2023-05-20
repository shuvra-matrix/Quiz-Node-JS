const Topic = require("../model/topic");

exports.adminIndex = (req, res, next) => {
  res.render("admin/index");
};

exports.getAddTopic = (req, res, next) => {
  res.render("admin/add-topic");
};

exports.postAddTopic = (req, res, next) => {
  const topicName = req.body.topic;
  const topic = new Topic(topicName);
  topic
    .save()
    .then((result) => {
      res.redirect("/admin");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.showAllTopic = (req, res, next) => {
  Topic.findAll()
    .then((topic) => {
      res.render("admin/show-topic", { topic: topic });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.showEditTopic = (req, res, next) => {
  const topicId = req.body.topicId;
  Topic.findById(topicId)
    .then((topic) => {
      console.log(typeof topic);
      res.render("admin/edit-topic", { topic: topic });
    })
    .catch((err) => {
      console.log(err);
    });
};
