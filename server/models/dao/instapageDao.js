const COLLECTION = 'instapage';

function checkLogin(db, loginCredentials) {
  return new Promise((resolve, reject) => {
    const collection = db.collection(COLLECTION);
    collection.find({"email":loginCredentials.email, "password":loginCredentials.password}).toArray(function(err, docs) {
      if (!err) {
        resolve(docs);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = {
  checkLogin: checkLogin
}
