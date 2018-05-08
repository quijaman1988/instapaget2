const dao = require('../models/dao/instapageDao');
const instaClient = require('../../instapage/instapageClient');

function home (req, res) {
  res.render('index');
}

function login (db) {
  return (request, response) => {
    // console.log(req.body)
    dao.checkLogin(db,request.body)
    .then((res) => {
      if (res.length == 0) {
        insertCredentialsInDB(request.body);
      } else {
        console.log("User does exist");
      }
    }).catch((err) => {
      console.log(err)
    })
  }

}

function insertCredentialsInDB(loginCredentials) {
  console.log("Insert Credentials in DB");
  instaClient.buildRequest("LOGIN",loginCredentials)
  .then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log("Invalid InstaPage Credentials");
  })
}

module.exports = {
    home:home,
    login:login
}
