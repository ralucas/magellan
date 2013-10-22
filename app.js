
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


var getCity = function (place, f){
	fs.readFile(__dirname + '/public/javascripts/data.js', function (err, data){
		if(err){console.log(err);}
		var places = JSON.parse(data);
		f(places[place]);
	});
}

app.get('/seville', function (req, res){
	getCity('seville', function (place){
		res.render('index', place);
	});
});

app.get('/canary_islands', function (req, res){
	getCity('canary_islands', function (place){
		res.render('index', place);
	});
});

app.get('/cape_verde', function (req, res){
	res.render('index', {title: 'Cape Verde'});
})

app.get('/strait_of_magellan', function (req, res){
	res.render('index', {title: 'Strait of Magellan'});
});

app.get('/guam', function (req, res){
	res.render('index', {title: 'Guam'});
});

app.get('/philippines', function (req, res){
	res.render('index', {title: 'Philippines'});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
