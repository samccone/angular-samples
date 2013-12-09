window.islandApp = angular.module 'islandApp', ['ngRoute', 'islandControllers']

window.islandApp.config ['$routeProvider', ($routeProvider) ->
 $routeProvider.when('/',
   templateUrl: 'list.html'
   controller: 'IslandList'
 ).when('/islands/:islandName',
   templateUrl: 'detail.html'
   controller: 'IslandDetail'
 ).otherwise(
   redirectTo: '/'
 )
]