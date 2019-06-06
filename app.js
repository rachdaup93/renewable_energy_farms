const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const flash        = require('connect-flash');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.maintitle = 'Renewable Energy Farms';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session(
  {
    secret: 'this string needs to be different for every app',
    resave: true,
    saveUninitialized: true
  }
));

// ROUTES
const index = require('./routes/index-router');
app.use('/', index);

// END OF ROUTES

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.stylesheet = `/_css/error.css`;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
