require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
const https = require('https');
const fs = require('fs');
const fs1 = require('fs');
const fs2 = require('fs');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

var indexRouter = require('./routes/index');
const { configDotenv } = require('dotenv');

// weight scale 1
// Specify the path of the serial port (e.g., 'COM6' on Windows or '/dev/ttyUSB0' on Unix-like systems)
const portPath = process.env.SCALE_1;
const filePath = 'data.txt';

const port = new SerialPort({ path: portPath, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

const portPath1 = process.env.SCALE_2;
const filePath1 = 'data1.txt';

const port1 = new SerialPort({ path: portPath1, baudRate: 9600 });
const parser1 = port1.pipe(new ReadlineParser({ delimiter: '\n' }));

const portPath2 = process.env.SCALE_3;
const filePath2 = 'data2.txt';

const port2 = new SerialPort({ path: portPath2, baudRate: 9600 });
const parser2 = port2.pipe(new ReadlineParser({ delimiter: '\n' }));

let dataWeight = '';
parser.on('data', (data) => {
  dataWeight = `${data}`;
  console.log(`Received data: ${data}`);
  fs.writeFileSync(filePath, dataWeight, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been written successfully.');
    }
  });
  // Process the received data as needed
});

let dataWeight1 = '';
parser1.on('data', (data) => {
  dataWeight1 = `${data}`;
  console.log(`Received data: ${data}`);
  console.log(filePath1);

  fs1.writeFileSync(filePath1, dataWeight1, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been written successfully.');
    }
  });
  // Process the received data as needed
});

let dataWeight2 = '';
parser2.on('data', (data) => {
  dataWeight2 = `${data}`;
  console.log(`Received data: ${data}`);
  fs2.writeFileSync(filePath2, dataWeight2, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File has been written successfully.');
    }
  });
  // Process the received data as needed
});

port.on('error', (err) => {
  console.error('Error:', err.message);
});

port1.on('error', (err) => {
  console.error('Error:', err.message);
});

port2.on('error', (err) => {
  console.error('Error:', err.message);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8080, () => {
  console.log(`Server listening in port ${8080}`);
});

module.exports = app;
