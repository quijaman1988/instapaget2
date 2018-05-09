const dao = require('../models/dao/instapageDao');
const instaClient = require('../../instapage/instapageClient');
const utils = require('../utils/utils');

function home (req, res) {
  res.render('index');
}

function login (db) {
  return (request, response) => {
    dao.checkLogin(db,request.body)
    .then((res) => {
      if (res.length == 0) {
        insertCredentialsInDB(request.body, db)
        .then((res2) => {
          var apiKeys = utils.encodeApiKeys(res2.ops[0].accountKeys);
          instaClient.buildRequest("CONNECT_ACCOUNT",{
            "accountkeys":apiKeys,
            "status":"connect",
            "domain":"127.0.0.1"
          }).then((res) => {
             console.log("Account Succesfully Connected to NodeJS Application");
            instaClient.buildRequest("GET_PAGE_LIST",res2.ops[0].accountKeys)
            .then((res) => {
              console.log(res)
            }).catch((err) => {
              console.log(err)
            });
          }).catch((err) => {
            console.log("Failed to Connect Account to NodeJS App");
          })

        }).catch((err) => {
          console.log(err)
        })
      } else {
        var apiKeys = utils.encodeApiKeys(res[0].accountKeys);
        instaClient.buildRequest("GET_PAGE_LIST",apiKeys)
        .then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err)
        });
      }
    }).catch((err) => {
      console.log(err)
    })
  }

}

function insertCredentialsInDB(loginCredentials, db) {
  return new Promise((resolve, reject) => {
  instaClient.buildRequest("LOGIN",loginCredentials)
  .then((res) => {
    console.log("marco");
    if (res.success) {
      instaClient.buildRequest("GET_ACCOUNT_KEYS", res.data.usertoken)
      .then((response) => {
        var options = {
          username: loginCredentials.email,
          accountKeys: response.data.accountkeys,
          plugin_hash: res.data.usertoken
        };
        dao.upsertNewUser(db,options)
        .then((res) => {
          resolve(res);
          return;
        }).catch((err) => {
          reject(err)
        });
      }).catch((err) => {
        reject(err)
      });
    } else {
      reject("Login Failed")
    }
  }).catch((err) => {
    reject(err);
  });
});
}

module.exports = {
    home:home,
    login:login
}
