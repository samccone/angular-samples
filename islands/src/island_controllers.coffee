window.islandControllers = angular.module 'islandControllers', []

islandControllers.controller 'IslandList',
  ['$scope', '$http', ($scope, $http) ->
    $scope.islands = ["Flotsam", "Jerkbait", "Brillig", "Boulder Beach", "Isle of Ewe", "Rock of Gelato"]
  ]

islandControllers.controller 'IslandDetail',
  ['$scope', '$routeParams', ($scope, $routeParams) ->
    $scope.islandName = $routeParams.islandName
  ]