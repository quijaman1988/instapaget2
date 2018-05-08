const Server = require('./server/server');
const MongoClient = require('mongodb').MongoClient;
const config = require('./config')();
const url = config.DB_PATH;

// Database Name
const dbName = 'instapage';

MongoClient.connect(url, function(err, client) {
  if (!err) {
    console.log("Connected successfully to MongoDB");
    const db = client.db(dbName);
    new Server(config,db).start();
  } else {
    console.log("Failed to Connect to MongoDB. Server will not start");
    client.close();
  }
});
