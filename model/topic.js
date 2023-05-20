const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");
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

  static findById(topicId) {
    const db = getDb();
    return db
      .collection("topic")
      .find({ _id: new mongodb.ObjectId(topicId) })
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
