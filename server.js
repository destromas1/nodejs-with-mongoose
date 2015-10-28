var express = require('express');
var cons = require('consolidate');
var app = express();

var User = require('./app/models/Person');
  

var shahjada = new User({
  firstName: 'shahjada',
  lastName : 'talukdar',
  created_at : new Date(),
  updated_at : new Date()
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude


// call the built-in save method to save to the database
shahjada.save(function(err) {
  if (err){
     console.log(err);
     throw err;
  }
  console.log('Person saved successfully!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
