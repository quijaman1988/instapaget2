// const COLLECTION = 'instapage_options';

function checkLogin(db, loginCredentials) {
  return new Promise((resolve, reject) => {
    const collection = db.collection("instapage_options");
    collection.find({"username":loginCredentials.email}).toArray(function(err, docs) {
      if (!err) {
        resolve(docs);
      } else {
        reject(err);
      }
    });
  });
}

function upsertNewUser(db, options) {
  return new Promise((resolve, reject) => {
    console.log("NEW")
    const collection = db.collection("instapage_options");
    collection.insert(options, function(err, result) {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  checkLogin: checkLogin,
  upsertNewUser: upsertNewUser
}
