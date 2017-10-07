'use strict';

let MongoClient = require('mongodb').MongoClient

let url = 'mongodb://calhacks:1234@ds113795.mlab.com:13795/wheretoeatdata';

MongoClient.connect(url, function(err, db) {
    if (db !== null && db !== undefined) {
        console.log("Connected successfully to server");
    }
    db.close();
  });