(function() {
  window.lecheckApp.factory('imageSearch', [
    '$http', function($http) {
      return function(query, currentPage, imagesPerQuery) {
        if (currentPage == null) {
          currentPage = 0;
        }
        if (imagesPerQuery == null) {
          imagesPerQuery = 4;
        }
        return $http({
          method: 'JSONP',
          url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + (encodeURIComponent(query)) + "&callback=JSON_CALLBACK&start=" + (currentPage * imagesPerQuery)
        });
      };
    }
  ]);

}).call(this);
