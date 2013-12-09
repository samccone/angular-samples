window.lecheckApp = angular.module 'lechuckApp', [->
]

lecheckApp.controller 'lechuckGallery', ['$scope', '$http', ($scope, $http) ->
  $scope.currentPage = 0

  $scope.images = []
  $scope.nextPage = ->
    ++$scope.currentPage
    loadImages()

  loadImages = ->
    $http(
      method: 'JSONP'
      url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=lechuck%20monkey%20island&callback=JSON_CALLBACK&start=#{$scope.currentPage * 4}"
    ).success (d) ->
      $scope.images = $scope.images.concat(d.responseData.results)

  loadImages()
]
