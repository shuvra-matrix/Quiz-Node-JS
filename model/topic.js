const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");
class Topic {
  constructor(topic, id) {
    this.topic = topic;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }
  save() {
    const db = getDb();
    let newDb;
    if (this._id) {
      newDb = db
        .collection("topic")
        .updateOne({ _id: this._id }, { $set: { topic: this.topic } });
    } else {
      newDb = db.collection("topic").insertOne(this);
    }
    return newDb
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
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

  static deleteById(topicId) {
    const db = getDb();
    return db
      .collection("topic")
      .deleteOne({ _id: new mongodb.ObjectId(topicId) })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Topic;
