var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var cors=require('cors');
// for MongoDB connection 4
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin123@ds139946.mlab.com:39946/sum-finance',{ useNewUrlParser: true });
var app = express();
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
mongoose.set('useNewUrlParser', true);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/finance', require('./routes/finance'));
app.use('/item', require('./routes/Item'));
app.use('/tax', require ('./routes/tax'));
 app.use('/invoice', require('./routes/invoices'));
app.use('/user', require('./routes/user'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
next(createError(404));
});
//connecting to MongoDB 
mongoose.connect('mongodb://admin:admin123@ds139946.mlab.com:39946/sum-finance');
console.log('MonogDb is connected')
mongoose.connection.on('error', function (err) {
console.error('MongoDB connection error: ' + err);
process.exit(-1);
});
// mongoose.connect('mongodb://localhost:27017/sum-finance');
//  console.log('local db is connected')
// error handler
app.use(function (err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

module.exports = app;