window.App = window.App || {};

App.router = angular.module('router', ['ngRoute', 'controllers']);

App.router.config(['$routeProvider', function(r) {
  r.when('/', {
      template: '<input ng-model="zap"></input><h2>{{zap}}</h2>',
      controller: 'home'
    }
  );
}]);
