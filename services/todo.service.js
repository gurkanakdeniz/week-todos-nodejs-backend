const Todo = require("../models/todo.model");
const Util = require("../services/util.service");

exports.weekTodos = async function(date) {
  const weekNumber = await Util.getWeekNumber(date);
  const todos = await Todo.find({ week: weekNumber });
  return todos;
};

exports.add = async function(body) {
  const weekNumber = await Util.getWeekNumber(body.date);
  const todo = new Todo({
    title: body.title,
    description: body.description,
    date: body.date,
    week: weekNumber
  });
  await todo.save();
  return "of the jedi : 42";
};

exports.update = async function(body) {
  const id = body._id;
  await Todo.updateOne(
    { _id: id },
    { $set: { title: body.title, description: body.description } }
  );
  return "of the jedi : 42";
};

exports.delete = async function(body) {
  const id = body._id;
  await Todo.deleteOne({ _id: id });
  return "of the jedi : 42";
};
