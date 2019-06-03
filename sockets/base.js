module.exports = function(io) {
  "use strict";
  io.on("connection", function(socket) {
    socket.on("message", function(data) {
      console.log("start");
      console.log(data);

      io.sockets.emit("new_message", {
        message: "do or do not there is no try",
        username: "yoda"
      });
      /*io.sockets.emit("new_message", {
        payload: data,
        source: from
      });*/
      console.log("end");
    });

    // socket.on("message", function(from, msg) {
    //   console.log("recieved message from", from, "msg", JSON.stringify(msg));
    //   console.log("broadcasting message");
    //   console.log("payload is", msg);
    //   io.sockets.emit("broadcast", {
    //     payload: msg,
    //     source: from
    //   });
    //   console.log("broadcast complete");
    // });
  });
};

// //listen on every connection
// io.on('connection', (socket) => {
// 	console.log('New user connected')
//
// 	//default username
// 	socket.username = "Anonymous"
//
//     //listen on change_username
//     socket.on('change_username', (data) => {
//         socket.username = data.username
//     })
//
//     //listen on new_message
//     socket.on('new_message', (data) => {
//         //broadcast the new message
//         io.sockets.emit('new_message', {message : data.message, username : socket.username});
//     })
//
//     //listen on typing
//     socket.on('typing', (data) => {
//     	socket.broadcast.emit('typing', {username : socket.username})
//     })
// })
