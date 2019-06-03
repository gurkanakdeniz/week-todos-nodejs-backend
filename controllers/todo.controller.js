var TodoService = require("../services/todo.service");
var Util = require("../services/util.service");
var todoSocketController = require("../sockets/todo.socket.controller");

exports.weekTodos = async function(req, res, next) {
  try {
    var response = await TodoService.weekTodos(req.body.date);
    var result = await Util.format(response);
    todoSocketController.weekTodosEmit(req.io, new Date());
    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.addTodo = async function(req, res, next) {
  try {
    var response = await TodoService.add(req.body);
    todoSocketController.weekTodosEmit(req.io, new Date());
    return res.status(200).json({
      message: response
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.updateTodo = async function(req, res, next) {
  try {
    var response = await TodoService.update(req.body);
    todoSocketController.weekTodosEmit(req.io, new Date());
    return res.status(200).json({
      message: response
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};

exports.deleteTodo = async function(req, res, next) {
  try {
    var response = await TodoService.delete(req.body);
    todoSocketController.weekTodosEmit(req.io, new Date());
    return res.status(200).json({
      message: response
    });
  } catch (e) {
    return res.status(400).json({ message: e.message });
  }
};
