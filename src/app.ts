import express from 'express';
import path from 'path';
import fs from 'fs';
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app: express.Application = express();

// paths
const view_path = path.join(__dirname, '../views');
const render_path = path.join(view_path, 'render');

// view engine setup
app.set('view engine', 'pug');
app.set('views', [view_path, render_path]);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));

// Load up routes

//TODO: actually source this from /routes
import { default as model } from './models/resume';

const directory: string[] = [];

fs.readdirSync(path.join(view_path, 'render'))
  .filter((file) => { return file.endsWith('.pug') })
  .map((file) => { return file.replace('.pug', '') })
  .forEach((file) => {
    directory.push(file);
    app.get(`/${file}`, (req, res, next) => {
      res.render(file, model);
    })
  })

console.log(directory);

app.get('/', (req, res, next) => {
  res.render('directory', { directory })
})

// var routes = fs.readdirSync(path.join(__dirname, 'routes'));
// var directory: string[] = [];
// for (let route of routes) {
//   let view: string = route.replace(/\.\w+$/, '')
//   let path = "/" + view
//   directory.push(path)
//   app.get(path, (req, res, next) => {
//     res.render(view)
//   })
// }

// console.log(directory)

// Build up directory
app.get('/', function (req, res, next) {
  res.render('index', { directory });
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
import type { ErrorRequestHandler } from "express";
const err_handler: ErrorRequestHandler = (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}
app.use(err_handler);


export { app }