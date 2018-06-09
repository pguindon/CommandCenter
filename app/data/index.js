const app = angular.module('app', ["ngRoute", "ngAnimate"]);

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/threevertical', {
      templateUrl: 'view/threevertical.html',
    })
    .when('/threestack', {
      templateUrl: 'view/threestack.html',
    })
    .when('/halfhalf', {
      templateUrl: 'view/halfhalf.html',
    })
    .otherwise({ redirectTo: '/threevertical' });
});


app.controller('MainCtrl', function ($scope) {



});

app.controller('ThreeeStackCtrl', function ($scope) {


});
