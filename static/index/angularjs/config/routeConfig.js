app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "index/main.html",
    controller: 'mainCtrl as mainCtrl'
    });
});
