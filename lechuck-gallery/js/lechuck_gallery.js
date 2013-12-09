(function() {
  window.lecheckApp = angular.module('lechuckApp', [function() {}]);

  lecheckApp.controller('lechuckGallery', [
    '$scope', '$http', function($scope, $http) {
      var loadImages;
      $scope.currentPage = 0;
      $scope.images = [];
      $scope.nextPage = function() {
        ++$scope.currentPage;
        return loadImages();
      };
      loadImages = function() {
        return $http({
          method: 'JSONP',
          url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=lechuck%20monkey%20island&callback=JSON_CALLBACK&start=" + ($scope.currentPage * 4)
        }).success(function(d) {
          return $scope.images = $scope.images.concat(d.responseData.results);
        });
      };
      return loadImages();
    }
  ]);

}).call(this);
