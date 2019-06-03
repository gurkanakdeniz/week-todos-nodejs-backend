const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = Schema({
  title: String,
  description: String,
  date: {
    type: Date,
    required: true
  },
  week: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("todos", TodoSchema);
