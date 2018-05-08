const dao = require('../models/dao/instapageDao');

function home (req, res) {
  res.render('index');
}

function login (db) {
  return (req, res) => {
    console.log(req.body)
    dao.checkLogin(db,req.body)
    .then((res) => {
      if (res.length == 0) {
        insertCredentialsInDB();
      } else {
        console.log("User does exist");
      }
    })
  }

}

function insertCredentialsInDB() {
  console.log("Insert Credentials in DB");
}

module.exports = {
    home:home,
    login:login
}
