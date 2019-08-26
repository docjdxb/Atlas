'use strict';
const config = require('../config');

const Mongoose = require('mongoose').connect(config.dbURI, { useNewUrlParser: true }).
  catch(error => console.log("MongoDB Error: ", error));

require('mongoose').connection.on('error', err => {
  console.log("MongoDB Error: ", err);
});

module.exports = {
  Mongoose
}
