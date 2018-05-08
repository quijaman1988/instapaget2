app.controller('mainCtrl', function ($scope, $http, dataServices) {
  console.log("In Controller");
  $scope.loginInfo = {
    email:"",
    password:""
  }
  $scope.login = login;

  function login() {
    dataServices.login($scope.loginInfo)
    .then(function(res) {
      if(res.status === 200) {
        console.log("Success");
      }
    })
  }


});
