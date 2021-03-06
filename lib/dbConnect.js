'use strict'
const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku

// Connection to mongoDB
//Thanks to WDI instructional staff for user auth template
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/searchtwitter';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
