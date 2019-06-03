var TodoService = require("../services/todo.service");
var Util = require("../services/util.service");

exports.weekTodosEmit = function(io, date) {
  weekTodosEmit(io, date);
};

function weekTodosEmit(io, date) {
  var response = TodoService.weekTodos(new Date()); //"2019-04-19T13:55:17.518Z"); //new Date());
  response.then(function(responseData) {
    var result = Util.format(responseData);
    io.sockets.emit("weekTodos", {
      data: result
    });
  });
}

exports.loadListener = function(io, socket) {
  socket.on("addTodo", function(data) {
    console.log("addTodo start");
    console.log(data);
    var response = TodoService.add(data);
    response.then(function(responseData) {
      weekTodosEmit(io, new Date());
      console.log("end");
    });
  });

  socket.on("updateTodo", function(data) {
    console.log("updateTodo start");
    console.log(data);
    var response = TodoService.update(data);
    response.then(function(responseData) {
      weekTodosEmit(io, new Date());
      console.log("end");
    });
  });

  socket.on("deleteTodo", function(data) {
    console.log("deleteTodo start");
    var response = TodoService.delete(data);
    response.then(function(responseData) {
      weekTodosEmit(io, new Date());
      console.log("end");
    });
  });
};
