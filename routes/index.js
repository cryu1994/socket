module.exports = function Route(app, server){

  //this is listening to the sevrer that we passed in at the server page
  var io = require('socket.io').listen(server);

  app.get('/', function(req, res) {
      res.render("index");
  });
  io.sockets.on('connection', function(socket){ //this is the connection that connect the sockets to the html, in other words, callback
    socket.on("posted_form", function(data){ // this is the emition that i got it from client
      var random_number = Math.floor((Math.random() * 1000) + 1); // create the random_number
      console.log(data)

      socket.emit('updated_message', {response: data}); // and emit back to the client
      socket.emit('random_number', {response: random_number}); //as well as the random_number
    })
  })
};
