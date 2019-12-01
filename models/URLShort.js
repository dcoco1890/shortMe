const mongoose = require("mongoose");
const { Schema } = mongoose;

const URLSchema = new Schema({
  ogURL: {
    type: String
  },
  code: {
    type: String
  },
  shortyURL: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
const URL = mongoose.model("URLshort", URLSchema);
module.exports = URL;
