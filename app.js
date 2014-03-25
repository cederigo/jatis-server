'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var conf = require('./lib/conf');
var cls = require('./routes/cls'); //`class` is reserved keyword -> `cls`
var http = require('http');

var app = express();

// all environments
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

// get a class by name
app.get('/classes/:name', cls.get);

http.createServer(app).listen(conf.port, function(){
  console.log('Express server listening on port ' + conf.port);
});
