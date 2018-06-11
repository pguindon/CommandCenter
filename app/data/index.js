const app = angular.module('app', ["ngRoute", "ngAnimate", "ui.calendar"]);

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


app.controller('MainCtrl', function ($scope) {

  $scope.eventSources = [];

  $scope.uiConfig = {
    calendar:{
      height: 500,
      editable: true,
      header:{
        left: 'month basicWeek basicDay agendaWeek agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      eventClick: $scope.alertEventOnClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize
    }
  };


});
