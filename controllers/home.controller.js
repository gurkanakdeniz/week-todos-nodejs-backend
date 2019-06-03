var HomeService = require("../services/home.service");

exports.getIndex = async function(req, res, next) {
  // Validate request parameters, queries using express-validator
  try {
    var index = await HomeService.getIndex({});
    return res.status(200).json({
      data: index,
      message: "success!"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.test = async function(req, res, next) {
  // Validate request parameters, queries using express-validator
  try {
    console.log(req.io.sockets);
    console.log(req.io.sockets.name); // '/'
    var ss = req.body.send;
    if (ss === "jedi") {
      // var id = req.body.id;
      // var to = id; //"${" + id + "}";
      // console.log(to);
      req.io.sockets.emit("new_message", {
        message: req.body.message, //"do or do not there is no try",
        username: "yoda"
      });
      req.io.sockets.emit("messageChannel", {
        message: req.body.message, //"do or do not there is no try",
        username: "yoda"
      });
    }

    return res.status(200).json({
      data: "index",
      message: "success!"
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
