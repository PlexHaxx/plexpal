var express = require('express');
var app = express();

//configure routes
require('./views/main')(app);

//configure view rendering (mustache)
app.set('views', __dirname + '/static/templates');
app.set('view engine', 'mustache');
app.engine('mustache', require('hogan-middleware').__express);

//start server
var server = app.listen(3000, function() {
    console.log("Listening on port 3000");
});

