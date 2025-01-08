const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRout = require('./routes/index');
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const prodRout = require('./routes/products')
const deletRout = require('./routes/delet')






const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
// 


// MI ROUTES
app.use('/', indexRout);
app.use('/api', usersRouter);
app.use('/api', prodRout);
app.use('/', authRouter); //logout
app.use('/auth', authRouter);
app.use('/delete', deletRout);





// 




























// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
