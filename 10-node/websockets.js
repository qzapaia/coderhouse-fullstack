var express = require('express');
var app = express();
var http = require('http').Server(app);

var socketIo = require('socket.io');
var io = socketIo(http);
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })
var cloudinary = require('./cloudinary');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

app.get('/', function(req, res){
	res.status
	res.json
  	res.sendfile('index.html');
});

app.post('/picture',multipartMiddleware, function(req, res){
	var imagePath = req.files.logo.path
	
	cloudinary.uploader.upload(imagePath, function(result) { 
	  	console.log(result);
	});
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
