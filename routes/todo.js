var express = require("express");
var router = express.Router();

var todoController = require("../controllers/todo.controller");
router.post("/weekTodos", todoController.weekTodos);
router.post("/add", todoController.addTodo);
router.post("/update", todoController.updateTodo);
router.post("/delete", todoController.deleteTodo);

module.exports = router;
