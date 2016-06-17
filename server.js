/*
require express
require path

set express variable

require body-parser for post data

set up your use for body-parser and static content

set your set's, view path and ejs

require the mongoose file set up in the config folder

set variable for routes and pass app variable

tell app to listen to a port
*/
var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));

app.set('views',path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');

routes(app);

app.listen(8000, function(){
  console.log("On port 8000");
});
