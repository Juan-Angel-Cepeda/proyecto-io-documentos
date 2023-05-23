const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');
const config = require('config');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const institutionRouter = require('./routes/institutions');
const placeRouter = require('./routes/places');
const docuementRouter = require('./routes/documents');
const adminRouter = require('./routes/admin');
const peopleRouter = require('./routes/people');
const mapRouter = require('./routes/map');

const jwtKey = config.get('secret.key');

//mongodb conection
const uri = config.get('dbChain');

mongoose.connect(uri);
const db = mongoose.connection;

const app = express();

db.on('open',()=>{
  console.log("Conection ok");
})

db.on('error',()=>{
  console.log("No conection");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

//app.use(expressjwt({secret:jwtkey, algorithms:['HS256']})
//   .unless({path:["/login","/institutions","/places","/documents","/","/people"]}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/institutions',institutionRouter);
app.use('/places',placeRouter);
app.use('/documents',docuementRouter);
app.use('/admin',adminRouter);
app.use('/people',peopleRouter);
app.use('/maps',mapRouter);

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