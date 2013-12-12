window.App = window.App || {};

App.Controller = angular.module('controllers', []);

App.Controller.controller('home', ['$scope', function($scope) {
  $scope.zap="tap"
}]);
