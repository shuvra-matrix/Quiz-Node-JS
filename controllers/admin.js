exports.adminIndex = (req, res, next) => {
  res.render("admin/index");
};

exports.getAddTopic = (req, res, next) => {
  res.render("admin/add-topic");
};
