var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var logginRouter = require('./routes/login');
var scoreRouter = require('./routes/score'); 

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/login', logginRouter)
app.use('/user', usersRouter);
app.use('/score', scoreRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: 'Not found'
  });
});

// error handler
app.use(function(err, req, res, next) {
  console.error(error);
  res.status(err.status || 500).json({
    message: err.message
  });
});

module.exports = app;
