app.controller('mainCtrl', function ($scope, $http, dataServices, $location) {
  console.log("In Controller");
  $scope.loginInfo = {
    email:"",
    password:""
  }

  $scope.landing = false;
  $scope.login = login;
  $scope.landingPages = [];
  $scope.empty = false;
  $scope.error = false;
  $scope.errorMessage="";

  function login() {
    dataServices.login($scope.loginInfo)
    .then(function(res) {
      $scope.landing = true;
      $scope.error = false;
      $scope.empty = false;
      if (res.data.length > 0) {
        $scope.landingPages = res.data;
      } else {
        $scope.empty = true;
      }
    }).catch(function(err) {
      $scope.landing = false;
      $scope.error = true;
      $scope.message=err;
    })
  }
});
