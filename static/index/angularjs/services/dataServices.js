app.factory("dataServices", function($http){
    return {
        login: function(loginInfo) {
          return $http.post("api/v1/login", loginInfo)
        }
    };
});
