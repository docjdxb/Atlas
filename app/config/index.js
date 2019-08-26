'use strict';

if(process.env.NODE_ENV === 'production') {
  // Offer production stage variables
  module.exports = {
    host: process.env.host || "",
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret
  }
} else {
  //Offer dev stage env variables
  module.exports = require('./development.json');
}
