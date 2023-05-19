const getDb = require("../util/database").getDb;

class Topic {
  constructor(topic) {
    this.topic = topic;
  }
  save() {
    const db = getDb();
    return db.collection("topic").insertOne(this);
  }

  static findAll() {
    const db = getDb();
    return db
      .collection("topic")
      .find()
      .toArray()
      .then((topic) => {
        return topic;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Topic;
