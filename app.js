var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
var io = require("socket.io")();
const mongoose = require("mongoose");

var app = express();
app.use(cors());
app.io = io;

mongoose
  .connect(
    "mongodb://localhost/todoNote",
    { useNewUrlParser: true }
  )
  .then(db => console.log("db connected"))
  .catch(err => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/**
 * socket
 */
var todoSocketController = require("./sockets/todo.socket.controller");
// require("./sockets/base")(io);
io.on("connection", function(socket) {
  console.log("A client connection occurred!");
  todoSocketController.loadListener(io, socket);
  todoSocketController.weekTodosEmit(io, new Date());
});

//
app.use(function(req, res, next) {
  req.io = io;
  next();
  // next(createError(404));
});

var homeRouter = require("./routes/home");
var todoRouter = require("./routes/todo");
app.use("/", homeRouter);
app.use("/todo", todoRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
