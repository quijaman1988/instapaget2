const express = require('express');
const bodyParser = require('body-parser');
const es6Renderer = require('express-es6-template-engine');

module.exports = class ServerApp {

  constructor(config, db) {
  // External Dependices will be initialized here
  this.db = db;
  this.config = config;
  }

  start() {

      this.app = express();

      this.app.use(bodyParser.json()); // for parsing application/json
      this.app.engine('html', es6Renderer);
      this.app.set('views','server/views');
      this.app.set('view engine', 'html');
      this.app.use(express.static('static'))

      return this.app.listen(this.config.PORT, () => {
          console.log(`Server is running on port ${this.config.PORT}`);
      });
  }

}
