
const app = angular.module('app', ["ngRoute", "ngAnimate","material.components.eventCalendar"]);



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
    .when('/dan', {
	      templateUrl: 'view/dan.html',
    })
    .otherwise({ redirectTo: '/threevertical' });
});




app.controller('MainCtrl', ['$scope', function ($scope, $compile, $timeout) {

  var date = new Date();
  date.setDate(date.getDate() + 1);

  $scope.events = [
    {
      title: 'Vacation',
      start: new Date(),
      end: new Date(),
      allDay: false
    }
  ];

  $scope.chatbox = '';
  //insertChat("me", text);
  $scope.addchat = function(text) {
    insertChat("me", text);
  };

}]);


